import { RULE_INPUT_BRIDGE_TYPE_PREFIX } from '@/common/constants'
import http from '@/common/http'
import { getBridgeKey } from '@/common/tools'
import { ListDataWithPagination } from '@/types/common'
import {
  BridgeItem,
  BridgeMetricsData,
  ParamsForQueryRules,
  RuleItem,
  RuleMetrics,
  SchemaRegistry,
} from '@/types/rule'
import { getActions } from './action'

//Bridges
export async function getBridgeList(): Promise<any> {
  try {
    const data = await http.get('/bridges')
    return Promise.resolve(
      data.map((item: Omit<BridgeItem, 'id' | 'idForRuleFrom'>) => {
        const id = getBridgeKey(item)
        return {
          id,
          idForRuleFrom: `${RULE_INPUT_BRIDGE_TYPE_PREFIX}${id}`,
          ...item,
        }
      }),
    )
  } catch (error) {
    return Promise.reject(error)
  }
}

/**
 * bridge + action list
 */
export const getMixedActionList = async (): Promise<Array<BridgeItem>> => {
  try {
    const [actionList, bridgeList] = await Promise.all([getActions(), getBridgeList()])
    // FIXME:FIXME:FIXME: KAFKA
    for (let index = 0; index < actionList.length; index++) {
      const actionId = actionList[index].id
      const bridgeIndex = bridgeList.findIndex((item: BridgeItem) => item.id === actionId)
      if (bridgeIndex > -1) {
        bridgeList.splice(bridgeIndex, 1)
      }
    }
    return Promise.resolve(actionList.concat(bridgeList))
  } catch (error) {
    return Promise.reject(error)
  }
}

export async function createBridge(body: Record<string, unknown>): Promise<BridgeItem> {
  try {
    const data = await http.post('/bridges', body)
    return Promise.resolve({ ...data, id: getBridgeKey(data) })
  } catch (error) {
    return Promise.reject(error)
  }
}

export async function updateBridge(id: string, body: BridgeItem): Promise<any> {
  if (!id) return Promise.reject()
  try {
    const data = await http.put('/bridges/' + encodeURIComponent(id), body)
    return Promise.resolve({ ...data, id: getBridgeKey(data) })
  } catch (error) {
    return Promise.reject(error)
  }
}

export function startStopBridge(id: string, isEnable: boolean): Promise<any> {
  if (!id) return Promise.reject()
  return http.put(`/bridges/${encodeURIComponent(id)}/enable/${isEnable}`)
}

export async function getBridgeInfo(id: string): Promise<any> {
  if (!id) return Promise.reject()
  try {
    const data = await http.get('/bridges/' + encodeURIComponent(id))
    return Promise.resolve({ ...data, id: getBridgeKey(data) })
  } catch (error) {
    return Promise.reject(error)
  }
}

export function deleteBridge(id: string, withDependency = false): Promise<any> {
  if (!id) return Promise.reject()
  return http.delete(
    `/bridges/${encodeURIComponent(id)}${withDependency ? '?also_delete_dep_actions' : ''}`,
    {
      errorsHandleCustom: [400],
    },
  )
}

export function reconnectBridge(bridgeID: string): Promise<void> {
  return http.post(`/bridges/${bridgeID}/start`)
}

export function reconnectBridgeForNode(node: string, bridgeID: string): Promise<void> {
  return http.post(`/nodes/${node}/bridges/${bridgeID}/start`)
}

export async function resetBridgeMetrics(bridgeId: string): Promise<string> {
  return http.put(`/bridges/${bridgeId}/metrics/reset`)
}

export function testConnect(body: BridgeItem): Promise<void> {
  return http.post(`/bridges_probe`, body)
}

export function queryBridgeMetrics(id: string): Promise<BridgeMetricsData> {
  return http(`/bridges/${id}/metrics`)
}

//Rules
export function getRules(
  params: ParamsForQueryRules = { page: 1, limit: 1000 },
): Promise<ListDataWithPagination<RuleItem>> {
  return http.get('/rules', { params })
}

export function getRuleInfo(id: string): Promise<any> {
  if (!id) return Promise.reject()
  return http.get('/rules/' + encodeURIComponent(id))
}

export function createRules(body: Record<string, unknown>): Promise<any> {
  return http.post('/rules', body)
}

export function getRuleEvents(): Promise<any> {
  return http.get('/rule_events')
}

export function updateRules(id: string, body: Partial<RuleItem>): Promise<any> {
  if (!id) return Promise.reject()
  return http.put('/rules/' + encodeURIComponent(id), body)
}

export function deleteRules(id: string): Promise<any> {
  if (!id) return Promise.reject()
  return http.delete('/rules/' + encodeURIComponent(id))
}

export function testsql(body: Record<string, unknown>): Promise<any> {
  return http.post('/rule_test', body)
}

export function queryRuleMetrics(ruleId: string): Promise<RuleMetrics> {
  return http.get(`/rules/${ruleId}/metrics`)
}

export function resetRuleMetrics(ruleId: string): Promise<string> {
  return http.put(`/rules/${ruleId}/metrics/reset`)
}

export const querySchemas = (): Promise<Array<SchemaRegistry>> => {
  return http.get('/schema_registry')
}

export const createSchema = (data: SchemaRegistry): Promise<SchemaRegistry> => {
  return http.post('/schema_registry', data)
}

export const deleteSchema = (schemaName: string): Promise<void> => {
  return http.delete(`/schema_registry/${schemaName}`)
}

export const querySchemaDetail = (schemaName: string): Promise<SchemaRegistry> => {
  return http.get(`/schema_registry/${schemaName}`)
}

export const updateSchema = (
  schemaName: string,
  schema: Omit<SchemaRegistry, 'name'>,
): Promise<SchemaRegistry> => {
  return http.put(`/schema_registry/${schemaName}`, schema)
}
