import { formatsByName } from '@khelaia/address-encoder'

const COIN_LIST = Object.keys(formatsByName).filter(c => !c.match(/_LEGACY/))
export default COIN_LIST
