// a ts file importing types from other ts files picks up type declarations along the way,
// but importing just real code does not. Import an autogenerated list of all type definitions in core
// to get around this problem.
import './types/summary/core.d.ts';
import './types/summary/global.d.ts';
export {default} from './prebid.ts';
export type * from './types/summary/exports.d.ts';
