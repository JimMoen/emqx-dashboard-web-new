export type PostAuthentication409Code =
  typeof PostAuthentication409Code[keyof typeof PostAuthentication409Code]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PostAuthentication409Code = {
  ALREADY_EXISTS: 'ALREADY_EXISTS',
} as const

export type PostAuthentication409 = {
  code?: PostAuthentication409Code
  message?: string
}

export type PostAuthentication400Code =
  typeof PostAuthentication400Code[keyof typeof PostAuthentication400Code]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PostAuthentication400Code = {
  BAD_REQUEST: 'BAD_REQUEST',
} as const

export type PostAuthentication400 = {
  code?: PostAuthentication400Code
  message?: string
}

export type PostAuthentication200 =
  | EmqxAuthnLdapSchemaLdapDeprecated
  | EmqxAuthnLdapSchemaLdap
  | EmqxAuthnScramMnesiaSchemaScram
  | EmqxAuthnJwtSchemaJwtJwks
  | EmqxAuthnJwtSchemaJwtPublicKey
  | EmqxAuthnJwtSchemaJwtHmac
  | EmqxAuthnHttpSchemaHttpPost
  | EmqxAuthnHttpSchemaHttpGet
  | EmqxAuthnRedisSchemaRedisSentinel
  | EmqxAuthnRedisSchemaRedisCluster
  | EmqxAuthnRedisSchemaRedisSingle
  | EmqxAuthnMongodbSchemaMongoSharded
  | EmqxAuthnMongodbSchemaMongoRs
  | EmqxAuthnMongodbSchemaMongoSingle
  | EmqxAuthnPostgresqlSchemaPostgresql
  | EmqxAuthnMysqlSchemaMysql
  | EmqxAuthnMnesiaSchemaBuiltinDb

export type PostAuthenticationBody =
  | EmqxAuthnLdapSchemaLdapDeprecated
  | EmqxAuthnLdapSchemaLdap
  | EmqxAuthnScramMnesiaSchemaScram
  | EmqxAuthnJwtSchemaJwtJwks
  | EmqxAuthnJwtSchemaJwtPublicKey
  | EmqxAuthnJwtSchemaJwtHmac
  | EmqxAuthnHttpSchemaHttpPost
  | EmqxAuthnHttpSchemaHttpGet
  | EmqxAuthnRedisSchemaRedisSentinel
  | EmqxAuthnRedisSchemaRedisCluster
  | EmqxAuthnRedisSchemaRedisSingle
  | EmqxAuthnMongodbSchemaMongoSharded
  | EmqxAuthnMongodbSchemaMongoRs
  | EmqxAuthnMongodbSchemaMongoSingle
  | EmqxAuthnPostgresqlSchemaPostgresql
  | EmqxAuthnMysqlSchemaMysql
  | EmqxAuthnMnesiaSchemaBuiltinDbApi

export type GetAuthentication200Item =
  | EmqxAuthnLdapSchemaLdapDeprecated
  | EmqxAuthnLdapSchemaLdap
  | EmqxAuthnScramMnesiaSchemaScram
  | EmqxAuthnJwtSchemaJwtJwks
  | EmqxAuthnJwtSchemaJwtPublicKey
  | EmqxAuthnJwtSchemaJwtHmac
  | EmqxAuthnHttpSchemaHttpPost
  | EmqxAuthnHttpSchemaHttpGet
  | EmqxAuthnRedisSchemaRedisSentinel
  | EmqxAuthnRedisSchemaRedisCluster
  | EmqxAuthnRedisSchemaRedisSingle
  | EmqxAuthnMongodbSchemaMongoSharded
  | EmqxAuthnMongodbSchemaMongoRs
  | EmqxAuthnMongodbSchemaMongoSingle
  | EmqxAuthnPostgresqlSchemaPostgresql
  | EmqxAuthnMysqlSchemaMysql
  | EmqxAuthnMnesiaSchemaBuiltinDb

export type PutAuthenticationId409Code =
  typeof PutAuthenticationId409Code[keyof typeof PutAuthenticationId409Code]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PutAuthenticationId409Code = {
  ALREADY_EXISTS: 'ALREADY_EXISTS',
} as const

export type PutAuthenticationId409 = {
  code?: PutAuthenticationId409Code
  message?: string
}

export type PutAuthenticationId404Code =
  typeof PutAuthenticationId404Code[keyof typeof PutAuthenticationId404Code]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PutAuthenticationId404Code = {
  NOT_FOUND: 'NOT_FOUND',
} as const

export type PutAuthenticationId404 = {
  code?: PutAuthenticationId404Code
  message?: string
}

export type PutAuthenticationId400Code =
  typeof PutAuthenticationId400Code[keyof typeof PutAuthenticationId400Code]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PutAuthenticationId400Code = {
  BAD_REQUEST: 'BAD_REQUEST',
} as const

export type PutAuthenticationId400 = {
  code?: PutAuthenticationId400Code
  message?: string
}

export type PutAuthenticationIdBody =
  | EmqxAuthnLdapSchemaLdapDeprecated
  | EmqxAuthnLdapSchemaLdap
  | EmqxAuthnScramMnesiaSchemaScram
  | EmqxAuthnJwtSchemaJwtJwks
  | EmqxAuthnJwtSchemaJwtPublicKey
  | EmqxAuthnJwtSchemaJwtHmac
  | EmqxAuthnHttpSchemaHttpPost
  | EmqxAuthnHttpSchemaHttpGet
  | EmqxAuthnRedisSchemaRedisSentinel
  | EmqxAuthnRedisSchemaRedisCluster
  | EmqxAuthnRedisSchemaRedisSingle
  | EmqxAuthnMongodbSchemaMongoSharded
  | EmqxAuthnMongodbSchemaMongoRs
  | EmqxAuthnMongodbSchemaMongoSingle
  | EmqxAuthnPostgresqlSchemaPostgresql
  | EmqxAuthnMysqlSchemaMysql
  | EmqxAuthnMnesiaSchemaBuiltinDbApi

export type GetAuthenticationId404Code =
  typeof GetAuthenticationId404Code[keyof typeof GetAuthenticationId404Code]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetAuthenticationId404Code = {
  NOT_FOUND: 'NOT_FOUND',
} as const

export type GetAuthenticationId404 = {
  code?: GetAuthenticationId404Code
  message?: string
}

export type GetAuthenticationId200 =
  | EmqxAuthnLdapSchemaLdapDeprecated
  | EmqxAuthnLdapSchemaLdap
  | EmqxAuthnScramMnesiaSchemaScram
  | EmqxAuthnJwtSchemaJwtJwks
  | EmqxAuthnJwtSchemaJwtPublicKey
  | EmqxAuthnJwtSchemaJwtHmac
  | EmqxAuthnHttpSchemaHttpPost
  | EmqxAuthnHttpSchemaHttpGet
  | EmqxAuthnRedisSchemaRedisSentinel
  | EmqxAuthnRedisSchemaRedisCluster
  | EmqxAuthnRedisSchemaRedisSingle
  | EmqxAuthnMongodbSchemaMongoSharded
  | EmqxAuthnMongodbSchemaMongoRs
  | EmqxAuthnMongodbSchemaMongoSingle
  | EmqxAuthnPostgresqlSchemaPostgresql
  | EmqxAuthnMysqlSchemaMysql
  | EmqxAuthnMnesiaSchemaBuiltinDb

export type DeleteAuthenticationId404Code =
  typeof DeleteAuthenticationId404Code[keyof typeof DeleteAuthenticationId404Code]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const DeleteAuthenticationId404Code = {
  NOT_FOUND: 'NOT_FOUND',
} as const

export type DeleteAuthenticationId404 = {
  code?: DeleteAuthenticationId404Code
  message?: string
}

export type GetAuthenticationIdStatus500Code =
  typeof GetAuthenticationIdStatus500Code[keyof typeof GetAuthenticationIdStatus500Code]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetAuthenticationIdStatus500Code = {
  INTERNAL_ERROR: 'INTERNAL_ERROR',
} as const

export type GetAuthenticationIdStatus500 = {
  code?: GetAuthenticationIdStatus500Code
  message?: string
}

export type GetAuthenticationIdStatus404Code =
  typeof GetAuthenticationIdStatus404Code[keyof typeof GetAuthenticationIdStatus404Code]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetAuthenticationIdStatus404Code = {
  NOT_FOUND: 'NOT_FOUND',
} as const

export type GetAuthenticationIdStatus404 = {
  code?: GetAuthenticationIdStatus404Code
  message?: string
}

export type PostAuthenticationIdUsers404Code =
  typeof PostAuthenticationIdUsers404Code[keyof typeof PostAuthenticationIdUsers404Code]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PostAuthenticationIdUsers404Code = {
  NOT_FOUND: 'NOT_FOUND',
} as const

export type PostAuthenticationIdUsers404 = {
  code?: PostAuthenticationIdUsers404Code
  message?: string
}

export type PostAuthenticationIdUsers400Code =
  typeof PostAuthenticationIdUsers400Code[keyof typeof PostAuthenticationIdUsers400Code]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PostAuthenticationIdUsers400Code = {
  BAD_REQUEST: 'BAD_REQUEST',
} as const

export type PostAuthenticationIdUsers400 = {
  code?: PostAuthenticationIdUsers400Code
  message?: string
}

export type GetAuthenticationIdUsers404Code =
  typeof GetAuthenticationIdUsers404Code[keyof typeof GetAuthenticationIdUsers404Code]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetAuthenticationIdUsers404Code = {
  NOT_FOUND: 'NOT_FOUND',
} as const

export type GetAuthenticationIdUsers404 = {
  code?: GetAuthenticationIdUsers404Code
  message?: string
}

export type GetAuthenticationIdUsersParams = {
  page?: PublicPageParameter
  limit?: PublicLimitParameter
  like_user_id?: string
  is_superuser?: boolean
}

export type PostAuthenticationIdImportUsers404Code =
  typeof PostAuthenticationIdImportUsers404Code[keyof typeof PostAuthenticationIdImportUsers404Code]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PostAuthenticationIdImportUsers404Code = {
  NOT_FOUND: 'NOT_FOUND',
} as const

export type PostAuthenticationIdImportUsers404 = {
  code?: PostAuthenticationIdImportUsers404Code
  message?: string
}

export type PostAuthenticationIdImportUsers400Code =
  typeof PostAuthenticationIdImportUsers400Code[keyof typeof PostAuthenticationIdImportUsers400Code]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PostAuthenticationIdImportUsers400Code = {
  BAD_REQUEST: 'BAD_REQUEST',
} as const

export type PostAuthenticationIdImportUsers400 = {
  code?: PostAuthenticationIdImportUsers400Code
  message?: string
}

export type PostAuthenticationIdImportUsersBody = {
  filename?: Blob
}

export type PutAuthenticationIdUsersUserId404Code =
  typeof PutAuthenticationIdUsersUserId404Code[keyof typeof PutAuthenticationIdUsersUserId404Code]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PutAuthenticationIdUsersUserId404Code = {
  NOT_FOUND: 'NOT_FOUND',
} as const

export type PutAuthenticationIdUsersUserId404 = {
  code?: PutAuthenticationIdUsersUserId404Code
  message?: string
}

export type PutAuthenticationIdUsersUserId400Code =
  typeof PutAuthenticationIdUsersUserId400Code[keyof typeof PutAuthenticationIdUsersUserId400Code]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PutAuthenticationIdUsersUserId400Code = {
  BAD_REQUEST: 'BAD_REQUEST',
} as const

export type PutAuthenticationIdUsersUserId400 = {
  code?: PutAuthenticationIdUsersUserId400Code
  message?: string
}

export type GetAuthenticationIdUsersUserId404Code =
  typeof GetAuthenticationIdUsersUserId404Code[keyof typeof GetAuthenticationIdUsersUserId404Code]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetAuthenticationIdUsersUserId404Code = {
  NOT_FOUND: 'NOT_FOUND',
} as const

export type GetAuthenticationIdUsersUserId404 = {
  code?: GetAuthenticationIdUsersUserId404Code
  message?: string
}

export type DeleteAuthenticationIdUsersUserId404Code =
  typeof DeleteAuthenticationIdUsersUserId404Code[keyof typeof DeleteAuthenticationIdUsersUserId404Code]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const DeleteAuthenticationIdUsersUserId404Code = {
  NOT_FOUND: 'NOT_FOUND',
} as const

export type DeleteAuthenticationIdUsersUserId404 = {
  code?: DeleteAuthenticationIdUsersUserId404Code
  message?: string
}

export type PutAuthenticationIdPositionPosition404Code =
  typeof PutAuthenticationIdPositionPosition404Code[keyof typeof PutAuthenticationIdPositionPosition404Code]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PutAuthenticationIdPositionPosition404Code = {
  NOT_FOUND: 'NOT_FOUND',
} as const

export type PutAuthenticationIdPositionPosition404 = {
  code?: PutAuthenticationIdPositionPosition404Code
  message?: string
}

export type PutAuthenticationIdPositionPosition400Code =
  typeof PutAuthenticationIdPositionPosition400Code[keyof typeof PutAuthenticationIdPositionPosition400Code]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PutAuthenticationIdPositionPosition400Code = {
  BAD_REQUEST: 'BAD_REQUEST',
} as const

export type PutAuthenticationIdPositionPosition400 = {
  code?: PutAuthenticationIdPositionPosition400Code
  message?: string
}

export type PublicPageParameter = number

export type PublicLimitParameter = number

export interface PublicMeta {
  page?: number
  limit?: number
  count?: number
  hasnext: boolean
}

export interface EmqxMongodbTopology {
  max_overflow?: number
  overflow_ttl?: string
  overflow_check_period?: string
  local_threshold_ms?: string
  connect_timeout_ms?: string
  socket_timeout_ms?: string
  server_selection_timeout_ms?: string
  wait_queue_timeout_ms?: string
  heartbeat_frequency_ms?: string
  min_heartbeat_frequency_ms?: string
}

export type EmqxLdapSslServerNameIndication = string | 'disable'

export type EmqxLdapSslLogLevel = typeof EmqxLdapSslLogLevel[keyof typeof EmqxLdapSslLogLevel]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxLdapSslLogLevel = {
  emergency: 'emergency',
  alert: 'alert',
  critical: 'critical',
  error: 'error',
  warning: 'warning',
  notice: 'notice',
  info: 'info',
  debug: 'debug',
  none: 'none',
  all: 'all',
} as const

export type EmqxLdapSslVerify = typeof EmqxLdapSslVerify[keyof typeof EmqxLdapSslVerify]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxLdapSslVerify = {
  verify_peer: 'verify_peer',
  verify_none: 'verify_none',
} as const

export interface EmqxLdapSsl {
  cacertfile?: string
  /** @deprecated */
  cacerts?: boolean
  certfile?: string
  keyfile?: string
  verify?: EmqxLdapSslVerify
  reuse_sessions?: boolean
  depth?: number
  password?: string
  versions?: string[]
  ciphers?: string[]
  secure_renegotiate?: boolean
  log_level?: EmqxLdapSslLogLevel
  hibernate_after?: string
  enable?: boolean
  server_name_indication?: EmqxLdapSslServerNameIndication
}

export type EmqxAuthnScramMnesiaSchemaScramAlgorithm =
  typeof EmqxAuthnScramMnesiaSchemaScramAlgorithm[keyof typeof EmqxAuthnScramMnesiaSchemaScramAlgorithm]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnScramMnesiaSchemaScramAlgorithm = {
  sha256: 'sha256',
  sha512: 'sha512',
} as const

export type EmqxAuthnScramMnesiaSchemaScramBackend =
  typeof EmqxAuthnScramMnesiaSchemaScramBackend[keyof typeof EmqxAuthnScramMnesiaSchemaScramBackend]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnScramMnesiaSchemaScramBackend = {
  built_in_database: 'built_in_database',
} as const

export type EmqxAuthnScramMnesiaSchemaScramMechanism =
  typeof EmqxAuthnScramMnesiaSchemaScramMechanism[keyof typeof EmqxAuthnScramMnesiaSchemaScramMechanism]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnScramMnesiaSchemaScramMechanism = {
  scram: 'scram',
} as const

export interface EmqxAuthnScramMnesiaSchemaScram {
  mechanism: EmqxAuthnScramMnesiaSchemaScramMechanism
  backend: EmqxAuthnScramMnesiaSchemaScramBackend
  algorithm?: EmqxAuthnScramMnesiaSchemaScramAlgorithm
  iteration_count?: number
  enable?: boolean
}

export interface EmqxAuthnSchemaResourceMetrics {
  matched?: number
  success?: number
  failed?: number
  rate?: number
  rate_max?: number
  rate_last5m?: number
}

export type EmqxAuthnSchemaNodeStatusStatus =
  typeof EmqxAuthnSchemaNodeStatusStatus[keyof typeof EmqxAuthnSchemaNodeStatusStatus]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnSchemaNodeStatusStatus = {
  connected: 'connected',
  disconnected: 'disconnected',
  connecting: 'connecting',
} as const

export interface EmqxAuthnSchemaNodeStatus {
  node?: string
  status?: EmqxAuthnSchemaNodeStatusStatus
}

export interface EmqxAuthnSchemaNodeResourceMetrics {
  node?: string
  metrics?: EmqxAuthnSchemaResourceMetrics
}

export interface EmqxAuthnSchemaNodeMetrics {
  node?: string
  metrics?: EmqxAuthnSchemaMetrics
}

export interface EmqxAuthnSchemaNodeError {
  node?: string
  error?: string
}

export type EmqxAuthnSchemaMetricsStatusFieldsStatus =
  typeof EmqxAuthnSchemaMetricsStatusFieldsStatus[keyof typeof EmqxAuthnSchemaMetricsStatusFieldsStatus]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnSchemaMetricsStatusFieldsStatus = {
  connected: 'connected',
  disconnected: 'disconnected',
  connecting: 'connecting',
  inconsistent: 'inconsistent',
} as const

export interface EmqxAuthnSchemaMetrics {
  nomatch?: number
  total?: number
  success?: number
  failed?: number
  rate?: number
  rate_max?: number
  rate_last5m?: number
}

export interface EmqxAuthnSchemaMetricsStatusFields {
  resource_metrics?: EmqxAuthnSchemaResourceMetrics
  node_resource_metrics?: EmqxAuthnSchemaNodeResourceMetrics
  metrics?: EmqxAuthnSchemaMetrics
  node_metrics?: EmqxAuthnSchemaNodeMetrics
  status?: EmqxAuthnSchemaMetricsStatusFieldsStatus
  node_status?: EmqxAuthnSchemaNodeStatus
  node_error?: EmqxAuthnSchemaNodeError
}

export type EmqxAuthnRedisSchemaRedisSingleRedisType =
  typeof EmqxAuthnRedisSchemaRedisSingleRedisType[keyof typeof EmqxAuthnRedisSchemaRedisSingleRedisType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnRedisSchemaRedisSingleRedisType = {
  single: 'single',
} as const

export type EmqxAuthnRedisSchemaRedisSinglePasswordHashAlgorithm =
  | AuthnHashSimple
  | AuthnHashPbkdf2
  | AuthnHashBcrypt

export type EmqxAuthnRedisSchemaRedisSingleBackend =
  typeof EmqxAuthnRedisSchemaRedisSingleBackend[keyof typeof EmqxAuthnRedisSchemaRedisSingleBackend]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnRedisSchemaRedisSingleBackend = {
  redis: 'redis',
} as const

export type EmqxAuthnRedisSchemaRedisSingleMechanism =
  typeof EmqxAuthnRedisSchemaRedisSingleMechanism[keyof typeof EmqxAuthnRedisSchemaRedisSingleMechanism]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnRedisSchemaRedisSingleMechanism = {
  password_based: 'password_based',
} as const

export interface EmqxAuthnRedisSchemaRedisSingle {
  mechanism: EmqxAuthnRedisSchemaRedisSingleMechanism
  backend: EmqxAuthnRedisSchemaRedisSingleBackend
  cmd: string
  password_hash_algorithm?: EmqxAuthnRedisSchemaRedisSinglePasswordHashAlgorithm
  enable?: boolean
  server: string
  redis_type?: EmqxAuthnRedisSchemaRedisSingleRedisType
  pool_size?: number
  username?: string
  password?: string
  database?: number
  /** @deprecated */
  auto_reconnect?: boolean
  ssl?: BrokerSslClientOpts
}

export type EmqxAuthnRedisSchemaRedisSentinelRedisType =
  typeof EmqxAuthnRedisSchemaRedisSentinelRedisType[keyof typeof EmqxAuthnRedisSchemaRedisSentinelRedisType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnRedisSchemaRedisSentinelRedisType = {
  sentinel: 'sentinel',
} as const

export type EmqxAuthnRedisSchemaRedisSentinelPasswordHashAlgorithm =
  | AuthnHashSimple
  | AuthnHashPbkdf2
  | AuthnHashBcrypt

export type EmqxAuthnRedisSchemaRedisSentinelBackend =
  typeof EmqxAuthnRedisSchemaRedisSentinelBackend[keyof typeof EmqxAuthnRedisSchemaRedisSentinelBackend]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnRedisSchemaRedisSentinelBackend = {
  redis: 'redis',
} as const

export type EmqxAuthnRedisSchemaRedisSentinelMechanism =
  typeof EmqxAuthnRedisSchemaRedisSentinelMechanism[keyof typeof EmqxAuthnRedisSchemaRedisSentinelMechanism]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnRedisSchemaRedisSentinelMechanism = {
  password_based: 'password_based',
} as const

export interface EmqxAuthnRedisSchemaRedisSentinel {
  mechanism: EmqxAuthnRedisSchemaRedisSentinelMechanism
  backend: EmqxAuthnRedisSchemaRedisSentinelBackend
  cmd: string
  password_hash_algorithm?: EmqxAuthnRedisSchemaRedisSentinelPasswordHashAlgorithm
  enable?: boolean
  servers: string
  redis_type?: EmqxAuthnRedisSchemaRedisSentinelRedisType
  sentinel: string
  pool_size?: number
  username?: string
  password?: string
  database?: number
  /** @deprecated */
  auto_reconnect?: boolean
  ssl?: BrokerSslClientOpts
}

export type EmqxAuthnRedisSchemaRedisClusterRedisType =
  typeof EmqxAuthnRedisSchemaRedisClusterRedisType[keyof typeof EmqxAuthnRedisSchemaRedisClusterRedisType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnRedisSchemaRedisClusterRedisType = {
  cluster: 'cluster',
} as const

export type EmqxAuthnRedisSchemaRedisClusterPasswordHashAlgorithm =
  | AuthnHashSimple
  | AuthnHashPbkdf2
  | AuthnHashBcrypt

export type EmqxAuthnRedisSchemaRedisClusterBackend =
  typeof EmqxAuthnRedisSchemaRedisClusterBackend[keyof typeof EmqxAuthnRedisSchemaRedisClusterBackend]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnRedisSchemaRedisClusterBackend = {
  redis: 'redis',
} as const

export type EmqxAuthnRedisSchemaRedisClusterMechanism =
  typeof EmqxAuthnRedisSchemaRedisClusterMechanism[keyof typeof EmqxAuthnRedisSchemaRedisClusterMechanism]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnRedisSchemaRedisClusterMechanism = {
  password_based: 'password_based',
} as const

export interface EmqxAuthnRedisSchemaRedisCluster {
  mechanism: EmqxAuthnRedisSchemaRedisClusterMechanism
  backend: EmqxAuthnRedisSchemaRedisClusterBackend
  cmd: string
  password_hash_algorithm?: EmqxAuthnRedisSchemaRedisClusterPasswordHashAlgorithm
  enable?: boolean
  servers: string
  redis_type?: EmqxAuthnRedisSchemaRedisClusterRedisType
  pool_size?: number
  username?: string
  password?: string
  /** @deprecated */
  auto_reconnect?: boolean
  ssl?: BrokerSslClientOpts
}

export type EmqxAuthnPostgresqlSchemaPostgresqlPasswordHashAlgorithm =
  | AuthnHashSimple
  | AuthnHashPbkdf2
  | AuthnHashBcrypt

export type EmqxAuthnPostgresqlSchemaPostgresqlBackend =
  typeof EmqxAuthnPostgresqlSchemaPostgresqlBackend[keyof typeof EmqxAuthnPostgresqlSchemaPostgresqlBackend]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnPostgresqlSchemaPostgresqlBackend = {
  postgresql: 'postgresql',
} as const

export type EmqxAuthnPostgresqlSchemaPostgresqlMechanism =
  typeof EmqxAuthnPostgresqlSchemaPostgresqlMechanism[keyof typeof EmqxAuthnPostgresqlSchemaPostgresqlMechanism]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnPostgresqlSchemaPostgresqlMechanism = {
  password_based: 'password_based',
} as const

export interface EmqxAuthnPostgresqlSchemaPostgresql {
  mechanism: EmqxAuthnPostgresqlSchemaPostgresqlMechanism
  backend: EmqxAuthnPostgresqlSchemaPostgresqlBackend
  password_hash_algorithm?: EmqxAuthnPostgresqlSchemaPostgresqlPasswordHashAlgorithm
  query: string
  enable?: boolean
  server: string
  database: string
  pool_size?: number
  username: string
  password?: string
  /** @deprecated */
  auto_reconnect?: boolean
  ssl?: BrokerSslClientOpts
}

export type EmqxAuthnMysqlSchemaMysqlPasswordHashAlgorithm =
  | AuthnHashSimple
  | AuthnHashPbkdf2
  | AuthnHashBcrypt

export type EmqxAuthnMysqlSchemaMysqlBackend =
  typeof EmqxAuthnMysqlSchemaMysqlBackend[keyof typeof EmqxAuthnMysqlSchemaMysqlBackend]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnMysqlSchemaMysqlBackend = {
  mysql: 'mysql',
} as const

export type EmqxAuthnMysqlSchemaMysqlMechanism =
  typeof EmqxAuthnMysqlSchemaMysqlMechanism[keyof typeof EmqxAuthnMysqlSchemaMysqlMechanism]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnMysqlSchemaMysqlMechanism = {
  password_based: 'password_based',
} as const

export interface EmqxAuthnMysqlSchemaMysql {
  mechanism: EmqxAuthnMysqlSchemaMysqlMechanism
  backend: EmqxAuthnMysqlSchemaMysqlBackend
  password_hash_algorithm?: EmqxAuthnMysqlSchemaMysqlPasswordHashAlgorithm
  query: string
  query_timeout?: string
  enable?: boolean
  server: string
  database: string
  pool_size?: number
  username?: string
  password?: string
  /** @deprecated */
  auto_reconnect?: boolean
  ssl?: BrokerSslClientOpts
}

export type EmqxAuthnMongodbSchemaMongoSingleUseLegacyProtocol =
  typeof EmqxAuthnMongodbSchemaMongoSingleUseLegacyProtocol[keyof typeof EmqxAuthnMongodbSchemaMongoSingleUseLegacyProtocol]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnMongodbSchemaMongoSingleUseLegacyProtocol = {
  auto: 'auto',
  true: 'true',
  false: 'false',
} as const

export type EmqxAuthnMongodbSchemaMongoSingleWMode =
  typeof EmqxAuthnMongodbSchemaMongoSingleWMode[keyof typeof EmqxAuthnMongodbSchemaMongoSingleWMode]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnMongodbSchemaMongoSingleWMode = {
  unsafe: 'unsafe',
  safe: 'safe',
} as const

export type EmqxAuthnMongodbSchemaMongoSingleMongoType =
  typeof EmqxAuthnMongodbSchemaMongoSingleMongoType[keyof typeof EmqxAuthnMongodbSchemaMongoSingleMongoType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnMongodbSchemaMongoSingleMongoType = {
  single: 'single',
} as const

export type EmqxAuthnMongodbSchemaMongoSinglePasswordHashAlgorithm =
  | AuthnHashSimple
  | AuthnHashPbkdf2
  | AuthnHashBcrypt

export type EmqxAuthnMongodbSchemaMongoSingleFilter = { [key: string]: any }

export type EmqxAuthnMongodbSchemaMongoSingleBackend =
  typeof EmqxAuthnMongodbSchemaMongoSingleBackend[keyof typeof EmqxAuthnMongodbSchemaMongoSingleBackend]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnMongodbSchemaMongoSingleBackend = {
  mongodb: 'mongodb',
} as const

export type EmqxAuthnMongodbSchemaMongoSingleMechanism =
  typeof EmqxAuthnMongodbSchemaMongoSingleMechanism[keyof typeof EmqxAuthnMongodbSchemaMongoSingleMechanism]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnMongodbSchemaMongoSingleMechanism = {
  password_based: 'password_based',
} as const

export interface EmqxAuthnMongodbSchemaMongoSingle {
  mechanism: EmqxAuthnMongodbSchemaMongoSingleMechanism
  backend: EmqxAuthnMongodbSchemaMongoSingleBackend
  collection: string
  filter?: EmqxAuthnMongodbSchemaMongoSingleFilter
  password_hash_field?: string
  salt_field?: string
  is_superuser_field?: string
  password_hash_algorithm?: EmqxAuthnMongodbSchemaMongoSinglePasswordHashAlgorithm
  enable?: boolean
  mongo_type?: EmqxAuthnMongodbSchemaMongoSingleMongoType
  server: string
  w_mode?: EmqxAuthnMongodbSchemaMongoSingleWMode
  srv_record?: boolean
  pool_size?: number
  username?: string
  password?: string
  use_legacy_protocol?: EmqxAuthnMongodbSchemaMongoSingleUseLegacyProtocol
  auth_source?: string
  database: string
  topology?: EmqxMongodbTopology
  ssl?: BrokerSslClientOpts
}

export type EmqxAuthnMongodbSchemaMongoShardedUseLegacyProtocol =
  typeof EmqxAuthnMongodbSchemaMongoShardedUseLegacyProtocol[keyof typeof EmqxAuthnMongodbSchemaMongoShardedUseLegacyProtocol]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnMongodbSchemaMongoShardedUseLegacyProtocol = {
  auto: 'auto',
  true: 'true',
  false: 'false',
} as const

export type EmqxAuthnMongodbSchemaMongoShardedWMode =
  typeof EmqxAuthnMongodbSchemaMongoShardedWMode[keyof typeof EmqxAuthnMongodbSchemaMongoShardedWMode]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnMongodbSchemaMongoShardedWMode = {
  unsafe: 'unsafe',
  safe: 'safe',
} as const

export type EmqxAuthnMongodbSchemaMongoShardedMongoType =
  typeof EmqxAuthnMongodbSchemaMongoShardedMongoType[keyof typeof EmqxAuthnMongodbSchemaMongoShardedMongoType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnMongodbSchemaMongoShardedMongoType = {
  sharded: 'sharded',
} as const

export type EmqxAuthnMongodbSchemaMongoShardedPasswordHashAlgorithm =
  | AuthnHashSimple
  | AuthnHashPbkdf2
  | AuthnHashBcrypt

export type EmqxAuthnMongodbSchemaMongoShardedFilter = { [key: string]: any }

export type EmqxAuthnMongodbSchemaMongoShardedBackend =
  typeof EmqxAuthnMongodbSchemaMongoShardedBackend[keyof typeof EmqxAuthnMongodbSchemaMongoShardedBackend]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnMongodbSchemaMongoShardedBackend = {
  mongodb: 'mongodb',
} as const

export type EmqxAuthnMongodbSchemaMongoShardedMechanism =
  typeof EmqxAuthnMongodbSchemaMongoShardedMechanism[keyof typeof EmqxAuthnMongodbSchemaMongoShardedMechanism]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnMongodbSchemaMongoShardedMechanism = {
  password_based: 'password_based',
} as const

export interface EmqxAuthnMongodbSchemaMongoSharded {
  mechanism: EmqxAuthnMongodbSchemaMongoShardedMechanism
  backend: EmqxAuthnMongodbSchemaMongoShardedBackend
  collection: string
  filter?: EmqxAuthnMongodbSchemaMongoShardedFilter
  password_hash_field?: string
  salt_field?: string
  is_superuser_field?: string
  password_hash_algorithm?: EmqxAuthnMongodbSchemaMongoShardedPasswordHashAlgorithm
  enable?: boolean
  mongo_type?: EmqxAuthnMongodbSchemaMongoShardedMongoType
  servers: string
  w_mode?: EmqxAuthnMongodbSchemaMongoShardedWMode
  srv_record?: boolean
  pool_size?: number
  username?: string
  password?: string
  use_legacy_protocol?: EmqxAuthnMongodbSchemaMongoShardedUseLegacyProtocol
  auth_source?: string
  database: string
  topology?: EmqxMongodbTopology
  ssl?: BrokerSslClientOpts
}

export type EmqxAuthnMongodbSchemaMongoRsUseLegacyProtocol =
  typeof EmqxAuthnMongodbSchemaMongoRsUseLegacyProtocol[keyof typeof EmqxAuthnMongodbSchemaMongoRsUseLegacyProtocol]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnMongodbSchemaMongoRsUseLegacyProtocol = {
  auto: 'auto',
  true: 'true',
  false: 'false',
} as const

export type EmqxAuthnMongodbSchemaMongoRsRMode =
  typeof EmqxAuthnMongodbSchemaMongoRsRMode[keyof typeof EmqxAuthnMongodbSchemaMongoRsRMode]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnMongodbSchemaMongoRsRMode = {
  master: 'master',
  slave_ok: 'slave_ok',
} as const

export type EmqxAuthnMongodbSchemaMongoRsWMode =
  typeof EmqxAuthnMongodbSchemaMongoRsWMode[keyof typeof EmqxAuthnMongodbSchemaMongoRsWMode]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnMongodbSchemaMongoRsWMode = {
  unsafe: 'unsafe',
  safe: 'safe',
} as const

export type EmqxAuthnMongodbSchemaMongoRsMongoType =
  typeof EmqxAuthnMongodbSchemaMongoRsMongoType[keyof typeof EmqxAuthnMongodbSchemaMongoRsMongoType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnMongodbSchemaMongoRsMongoType = {
  rs: 'rs',
} as const

export type EmqxAuthnMongodbSchemaMongoRsPasswordHashAlgorithm =
  | AuthnHashSimple
  | AuthnHashPbkdf2
  | AuthnHashBcrypt

export type EmqxAuthnMongodbSchemaMongoRsFilter = { [key: string]: any }

export type EmqxAuthnMongodbSchemaMongoRsBackend =
  typeof EmqxAuthnMongodbSchemaMongoRsBackend[keyof typeof EmqxAuthnMongodbSchemaMongoRsBackend]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnMongodbSchemaMongoRsBackend = {
  mongodb: 'mongodb',
} as const

export type EmqxAuthnMongodbSchemaMongoRsMechanism =
  typeof EmqxAuthnMongodbSchemaMongoRsMechanism[keyof typeof EmqxAuthnMongodbSchemaMongoRsMechanism]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnMongodbSchemaMongoRsMechanism = {
  password_based: 'password_based',
} as const

export interface EmqxAuthnMongodbSchemaMongoRs {
  mechanism: EmqxAuthnMongodbSchemaMongoRsMechanism
  backend: EmqxAuthnMongodbSchemaMongoRsBackend
  collection: string
  filter?: EmqxAuthnMongodbSchemaMongoRsFilter
  password_hash_field?: string
  salt_field?: string
  is_superuser_field?: string
  password_hash_algorithm?: EmqxAuthnMongodbSchemaMongoRsPasswordHashAlgorithm
  enable?: boolean
  mongo_type?: EmqxAuthnMongodbSchemaMongoRsMongoType
  servers: string
  w_mode?: EmqxAuthnMongodbSchemaMongoRsWMode
  r_mode?: EmqxAuthnMongodbSchemaMongoRsRMode
  replica_set_name: string
  srv_record?: boolean
  pool_size?: number
  username?: string
  password?: string
  use_legacy_protocol?: EmqxAuthnMongodbSchemaMongoRsUseLegacyProtocol
  auth_source?: string
  database: string
  topology?: EmqxMongodbTopology
  ssl?: BrokerSslClientOpts
}

export type EmqxAuthnMnesiaSchemaBuiltinDbApiUserIdType =
  typeof EmqxAuthnMnesiaSchemaBuiltinDbApiUserIdType[keyof typeof EmqxAuthnMnesiaSchemaBuiltinDbApiUserIdType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnMnesiaSchemaBuiltinDbApiUserIdType = {
  clientid: 'clientid',
  username: 'username',
} as const

export type EmqxAuthnMnesiaSchemaBuiltinDbApiBackend =
  typeof EmqxAuthnMnesiaSchemaBuiltinDbApiBackend[keyof typeof EmqxAuthnMnesiaSchemaBuiltinDbApiBackend]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnMnesiaSchemaBuiltinDbApiBackend = {
  built_in_database: 'built_in_database',
} as const

export type EmqxAuthnMnesiaSchemaBuiltinDbApiMechanism =
  typeof EmqxAuthnMnesiaSchemaBuiltinDbApiMechanism[keyof typeof EmqxAuthnMnesiaSchemaBuiltinDbApiMechanism]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnMnesiaSchemaBuiltinDbApiMechanism = {
  password_based: 'password_based',
} as const

export type EmqxAuthnMnesiaSchemaBuiltinDbApiPasswordHashAlgorithm =
  | AuthnHashSimple
  | AuthnHashPbkdf2
  | AuthnHashBcryptRwApi

export interface EmqxAuthnMnesiaSchemaBuiltinDbApi {
  password_hash_algorithm?: EmqxAuthnMnesiaSchemaBuiltinDbApiPasswordHashAlgorithm
  mechanism: EmqxAuthnMnesiaSchemaBuiltinDbApiMechanism
  backend: EmqxAuthnMnesiaSchemaBuiltinDbApiBackend
  user_id_type: EmqxAuthnMnesiaSchemaBuiltinDbApiUserIdType
  enable?: boolean
}

export type EmqxAuthnMnesiaSchemaBuiltinDbUserIdType =
  typeof EmqxAuthnMnesiaSchemaBuiltinDbUserIdType[keyof typeof EmqxAuthnMnesiaSchemaBuiltinDbUserIdType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnMnesiaSchemaBuiltinDbUserIdType = {
  clientid: 'clientid',
  username: 'username',
} as const

export type EmqxAuthnMnesiaSchemaBuiltinDbBackend =
  typeof EmqxAuthnMnesiaSchemaBuiltinDbBackend[keyof typeof EmqxAuthnMnesiaSchemaBuiltinDbBackend]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnMnesiaSchemaBuiltinDbBackend = {
  built_in_database: 'built_in_database',
} as const

export type EmqxAuthnMnesiaSchemaBuiltinDbMechanism =
  typeof EmqxAuthnMnesiaSchemaBuiltinDbMechanism[keyof typeof EmqxAuthnMnesiaSchemaBuiltinDbMechanism]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnMnesiaSchemaBuiltinDbMechanism = {
  password_based: 'password_based',
} as const

export type EmqxAuthnMnesiaSchemaBuiltinDbPasswordHashAlgorithm =
  | AuthnHashSimple
  | AuthnHashPbkdf2
  | AuthnHashBcryptRw

export interface EmqxAuthnMnesiaSchemaBuiltinDb {
  password_hash_algorithm?: EmqxAuthnMnesiaSchemaBuiltinDbPasswordHashAlgorithm
  mechanism: EmqxAuthnMnesiaSchemaBuiltinDbMechanism
  backend: EmqxAuthnMnesiaSchemaBuiltinDbBackend
  user_id_type: EmqxAuthnMnesiaSchemaBuiltinDbUserIdType
  enable?: boolean
}

export type EmqxAuthnLdapSchemaLdapDeprecatedBackend =
  typeof EmqxAuthnLdapSchemaLdapDeprecatedBackend[keyof typeof EmqxAuthnLdapSchemaLdapDeprecatedBackend]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnLdapSchemaLdapDeprecatedBackend = {
  ldap: 'ldap',
} as const

export type EmqxAuthnLdapSchemaLdapDeprecatedMechanism =
  typeof EmqxAuthnLdapSchemaLdapDeprecatedMechanism[keyof typeof EmqxAuthnLdapSchemaLdapDeprecatedMechanism]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnLdapSchemaLdapDeprecatedMechanism = {
  password_based: 'password_based',
} as const

export interface EmqxAuthnLdapSchemaLdapDeprecated {
  mechanism: EmqxAuthnLdapSchemaLdapDeprecatedMechanism
  backend: EmqxAuthnLdapSchemaLdapDeprecatedBackend
  query_timeout?: string
  enable?: boolean
  server: string
  pool_size?: number
  username: string
  password?: string
  base_dn: string
  filter?: string
  request_timeout?: string
  ssl?: EmqxLdapSsl
  password_attribute?: string
  is_superuser_attribute?: string
}

export type EmqxAuthnLdapSchemaLdapBackend =
  typeof EmqxAuthnLdapSchemaLdapBackend[keyof typeof EmqxAuthnLdapSchemaLdapBackend]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnLdapSchemaLdapBackend = {
  ldap: 'ldap',
} as const

export type EmqxAuthnLdapSchemaLdapMechanism =
  typeof EmqxAuthnLdapSchemaLdapMechanism[keyof typeof EmqxAuthnLdapSchemaLdapMechanism]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnLdapSchemaLdapMechanism = {
  password_based: 'password_based',
} as const

export interface EmqxAuthnLdapSchemaLdap {
  mechanism: EmqxAuthnLdapSchemaLdapMechanism
  backend: EmqxAuthnLdapSchemaLdapBackend
  query_timeout?: string
  enable?: boolean
  server: string
  pool_size?: number
  username: string
  password?: string
  base_dn: string
  filter?: string
  request_timeout?: string
  ssl?: EmqxLdapSsl
  method?: EmqxAuthnLdapSchemaLdapMethod
}

export type EmqxAuthnLdapSchemaHashMethodType =
  typeof EmqxAuthnLdapSchemaHashMethodType[keyof typeof EmqxAuthnLdapSchemaHashMethodType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnLdapSchemaHashMethodType = {
  hash: 'hash',
} as const

export interface EmqxAuthnLdapSchemaHashMethod {
  type?: EmqxAuthnLdapSchemaHashMethodType
  password_attribute?: string
  is_superuser_attribute?: string
}

export type EmqxAuthnLdapSchemaBindMethodType =
  typeof EmqxAuthnLdapSchemaBindMethodType[keyof typeof EmqxAuthnLdapSchemaBindMethodType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnLdapSchemaBindMethodType = {
  bind: 'bind',
} as const

export interface EmqxAuthnLdapSchemaBindMethod {
  type?: EmqxAuthnLdapSchemaBindMethodType
  bind_password?: string
}

export type EmqxAuthnLdapSchemaLdapMethod =
  | EmqxAuthnLdapSchemaBindMethod
  | EmqxAuthnLdapSchemaHashMethod

export type EmqxAuthnJwtSchemaJwtPublicKeyFrom =
  typeof EmqxAuthnJwtSchemaJwtPublicKeyFrom[keyof typeof EmqxAuthnJwtSchemaJwtPublicKeyFrom]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnJwtSchemaJwtPublicKeyFrom = {
  username: 'username',
  password: 'password',
} as const

export type EmqxAuthnJwtSchemaJwtPublicKeyMechanism =
  typeof EmqxAuthnJwtSchemaJwtPublicKeyMechanism[keyof typeof EmqxAuthnJwtSchemaJwtPublicKeyMechanism]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnJwtSchemaJwtPublicKeyMechanism = {
  jwt: 'jwt',
} as const

export type EmqxAuthnJwtSchemaJwtPublicKeyAlgorithm =
  typeof EmqxAuthnJwtSchemaJwtPublicKeyAlgorithm[keyof typeof EmqxAuthnJwtSchemaJwtPublicKeyAlgorithm]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnJwtSchemaJwtPublicKeyAlgorithm = {
  'public-key': 'public-key',
} as const

export interface EmqxAuthnJwtSchemaJwtPublicKey {
  algorithm: EmqxAuthnJwtSchemaJwtPublicKeyAlgorithm
  public_key?: string
  mechanism: EmqxAuthnJwtSchemaJwtPublicKeyMechanism
  acl_claim_name?: string
  verify_claims?: string[]
  from?: EmqxAuthnJwtSchemaJwtPublicKeyFrom
  enable?: boolean
}

export type EmqxAuthnJwtSchemaJwtJwksFrom =
  typeof EmqxAuthnJwtSchemaJwtJwksFrom[keyof typeof EmqxAuthnJwtSchemaJwtJwksFrom]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnJwtSchemaJwtJwksFrom = {
  username: 'username',
  password: 'password',
} as const

export type EmqxAuthnJwtSchemaJwtJwksMechanism =
  typeof EmqxAuthnJwtSchemaJwtJwksMechanism[keyof typeof EmqxAuthnJwtSchemaJwtJwksMechanism]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnJwtSchemaJwtJwksMechanism = {
  jwt: 'jwt',
} as const

export type EmqxAuthnJwtSchemaJwtJwksUseJwks =
  typeof EmqxAuthnJwtSchemaJwtJwksUseJwks[keyof typeof EmqxAuthnJwtSchemaJwtJwksUseJwks]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnJwtSchemaJwtJwksUseJwks = {
  true: 'true',
} as const

export interface EmqxAuthnJwtSchemaJwtJwks {
  use_jwks: EmqxAuthnJwtSchemaJwtJwksUseJwks
  endpoint: string
  pool_size?: number
  refresh_interval?: number
  ssl?: BrokerSslClientOpts
  mechanism: EmqxAuthnJwtSchemaJwtJwksMechanism
  acl_claim_name?: string
  verify_claims?: string[]
  from?: EmqxAuthnJwtSchemaJwtJwksFrom
  enable?: boolean
}

export type EmqxAuthnJwtSchemaJwtHmacFrom =
  typeof EmqxAuthnJwtSchemaJwtHmacFrom[keyof typeof EmqxAuthnJwtSchemaJwtHmacFrom]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnJwtSchemaJwtHmacFrom = {
  username: 'username',
  password: 'password',
} as const

export type EmqxAuthnJwtSchemaJwtHmacMechanism =
  typeof EmqxAuthnJwtSchemaJwtHmacMechanism[keyof typeof EmqxAuthnJwtSchemaJwtHmacMechanism]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnJwtSchemaJwtHmacMechanism = {
  jwt: 'jwt',
} as const

export type EmqxAuthnJwtSchemaJwtHmacAlgorithm =
  typeof EmqxAuthnJwtSchemaJwtHmacAlgorithm[keyof typeof EmqxAuthnJwtSchemaJwtHmacAlgorithm]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnJwtSchemaJwtHmacAlgorithm = {
  'hmac-based': 'hmac-based',
} as const

export interface EmqxAuthnJwtSchemaJwtHmac {
  algorithm: EmqxAuthnJwtSchemaJwtHmacAlgorithm
  secret: string
  secret_base64_encoded?: boolean
  mechanism: EmqxAuthnJwtSchemaJwtHmacMechanism
  acl_claim_name?: string
  verify_claims?: string[]
  from?: EmqxAuthnJwtSchemaJwtHmacFrom
  enable?: boolean
}

export type EmqxAuthnHttpSchemaHttpPostBody = { [key: string]: any }

export type EmqxAuthnHttpSchemaHttpPostBackend =
  typeof EmqxAuthnHttpSchemaHttpPostBackend[keyof typeof EmqxAuthnHttpSchemaHttpPostBackend]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnHttpSchemaHttpPostBackend = {
  http: 'http',
} as const

export type EmqxAuthnHttpSchemaHttpPostMechanism =
  typeof EmqxAuthnHttpSchemaHttpPostMechanism[keyof typeof EmqxAuthnHttpSchemaHttpPostMechanism]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnHttpSchemaHttpPostMechanism = {
  password_based: 'password_based',
} as const

export type EmqxAuthnHttpSchemaHttpPostHeaders = { [key: string]: any }

export type EmqxAuthnHttpSchemaHttpPostMethod =
  typeof EmqxAuthnHttpSchemaHttpPostMethod[keyof typeof EmqxAuthnHttpSchemaHttpPostMethod]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnHttpSchemaHttpPostMethod = {
  post: 'post',
} as const

export type EmqxAuthnHttpSchemaHttpGetBody = { [key: string]: any }

export type EmqxAuthnHttpSchemaHttpGetBackend =
  typeof EmqxAuthnHttpSchemaHttpGetBackend[keyof typeof EmqxAuthnHttpSchemaHttpGetBackend]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnHttpSchemaHttpGetBackend = {
  http: 'http',
} as const

export type EmqxAuthnHttpSchemaHttpGetMechanism =
  typeof EmqxAuthnHttpSchemaHttpGetMechanism[keyof typeof EmqxAuthnHttpSchemaHttpGetMechanism]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnHttpSchemaHttpGetMechanism = {
  password_based: 'password_based',
} as const

export type EmqxAuthnHttpSchemaHttpGetHeaders = { [key: string]: any }

export type EmqxAuthnHttpSchemaHttpGetMethod =
  typeof EmqxAuthnHttpSchemaHttpGetMethod[keyof typeof EmqxAuthnHttpSchemaHttpGetMethod]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnHttpSchemaHttpGetMethod = {
  get: 'get',
} as const

export interface EmqxAuthnHttpSchemaHttpGet {
  method: EmqxAuthnHttpSchemaHttpGetMethod
  headers?: EmqxAuthnHttpSchemaHttpGetHeaders
  mechanism: EmqxAuthnHttpSchemaHttpGetMechanism
  backend: EmqxAuthnHttpSchemaHttpGetBackend
  url: string
  body?: EmqxAuthnHttpSchemaHttpGetBody
  request_timeout?: string
  enable?: boolean
  connect_timeout?: string
  enable_pipelining?: number
  /** @deprecated */
  max_retries?: number
  pool_size?: number
  request?: ConnectorHttpRequest
  /** @deprecated */
  retry_interval?: string
  ssl?: BrokerSslClientOpts
}

export interface EmqxAuthnApiResponseUser {
  user_id: string
  is_superuser?: boolean
}

export interface EmqxAuthnApiResponseUsers {
  data?: EmqxAuthnApiResponseUser[]
  meta?: PublicMeta
}

export interface EmqxAuthnApiRequestUserUpdate {
  password: string
  is_superuser?: boolean
}

export interface EmqxAuthnApiRequestUserCreate {
  user_id: string
  password: string
  is_superuser?: boolean
}

export type ConnectorHttpRequestHeaders = { [key: string]: any }

export interface ConnectorHttpRequest {
  method?: string
  path?: string
  body?: string
  headers?: ConnectorHttpRequestHeaders
  max_retries?: number
  request_timeout?: string
}

export interface EmqxAuthnHttpSchemaHttpPost {
  method: EmqxAuthnHttpSchemaHttpPostMethod
  headers?: EmqxAuthnHttpSchemaHttpPostHeaders
  mechanism: EmqxAuthnHttpSchemaHttpPostMechanism
  backend: EmqxAuthnHttpSchemaHttpPostBackend
  url: string
  body?: EmqxAuthnHttpSchemaHttpPostBody
  request_timeout?: string
  enable?: boolean
  connect_timeout?: string
  enable_pipelining?: number
  /** @deprecated */
  max_retries?: number
  pool_size?: number
  request?: ConnectorHttpRequest
  /** @deprecated */
  retry_interval?: string
  ssl?: BrokerSslClientOpts
}

export type BrokerSslClientOptsServerNameIndication = string | 'disable'

export type BrokerSslClientOptsLogLevel =
  typeof BrokerSslClientOptsLogLevel[keyof typeof BrokerSslClientOptsLogLevel]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const BrokerSslClientOptsLogLevel = {
  emergency: 'emergency',
  alert: 'alert',
  critical: 'critical',
  error: 'error',
  warning: 'warning',
  notice: 'notice',
  info: 'info',
  debug: 'debug',
  none: 'none',
  all: 'all',
} as const

export type BrokerSslClientOptsVerify =
  typeof BrokerSslClientOptsVerify[keyof typeof BrokerSslClientOptsVerify]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const BrokerSslClientOptsVerify = {
  verify_peer: 'verify_peer',
  verify_none: 'verify_none',
} as const

export interface BrokerSslClientOpts {
  cacertfile?: string
  /** @deprecated */
  cacerts?: boolean
  certfile?: string
  keyfile?: string
  verify?: BrokerSslClientOptsVerify
  reuse_sessions?: boolean
  depth?: number
  password?: string
  versions?: string[]
  ciphers?: string[]
  secure_renegotiate?: boolean
  log_level?: BrokerSslClientOptsLogLevel
  hibernate_after?: string
  enable?: boolean
  server_name_indication?: BrokerSslClientOptsServerNameIndication
}

export type AuthnHashSimpleSaltPosition =
  typeof AuthnHashSimpleSaltPosition[keyof typeof AuthnHashSimpleSaltPosition]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnHashSimpleSaltPosition = {
  disable: 'disable',
  prefix: 'prefix',
  suffix: 'suffix',
} as const

export type AuthnHashSimpleName = typeof AuthnHashSimpleName[keyof typeof AuthnHashSimpleName]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnHashSimpleName = {
  plain: 'plain',
  md5: 'md5',
  sha: 'sha',
  sha256: 'sha256',
  sha512: 'sha512',
} as const

export interface AuthnHashSimple {
  name: AuthnHashSimpleName
  salt_position?: AuthnHashSimpleSaltPosition
}

export type AuthnHashPbkdf2MacFun = typeof AuthnHashPbkdf2MacFun[keyof typeof AuthnHashPbkdf2MacFun]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnHashPbkdf2MacFun = {
  md4: 'md4',
  md5: 'md5',
  ripemd160: 'ripemd160',
  sha: 'sha',
  sha224: 'sha224',
  sha256: 'sha256',
  sha384: 'sha384',
  sha512: 'sha512',
} as const

export type AuthnHashPbkdf2Name = typeof AuthnHashPbkdf2Name[keyof typeof AuthnHashPbkdf2Name]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnHashPbkdf2Name = {
  pbkdf2: 'pbkdf2',
} as const

export interface AuthnHashPbkdf2 {
  name: AuthnHashPbkdf2Name
  mac_fun: AuthnHashPbkdf2MacFun
  iterations: number
  dk_length?: number
}

export type AuthnHashBcryptRwApiName =
  typeof AuthnHashBcryptRwApiName[keyof typeof AuthnHashBcryptRwApiName]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnHashBcryptRwApiName = {
  bcrypt: 'bcrypt',
} as const

export interface AuthnHashBcryptRwApi {
  name: AuthnHashBcryptRwApiName
  salt_rounds?: number
}

export type AuthnHashBcryptRwName = typeof AuthnHashBcryptRwName[keyof typeof AuthnHashBcryptRwName]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnHashBcryptRwName = {
  bcrypt: 'bcrypt',
} as const

export interface AuthnHashBcryptRw {
  name: AuthnHashBcryptRwName
  salt_rounds?: number
}

export type AuthnHashBcryptName = typeof AuthnHashBcryptName[keyof typeof AuthnHashBcryptName]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnHashBcryptName = {
  bcrypt: 'bcrypt',
} as const

export interface AuthnHashBcrypt {
  name: AuthnHashBcryptName
}
