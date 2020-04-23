import * as Runtime from './domains/Runtime';
import * as Page from './domains/Page';
import * as DOM from './domains/DOM';
import * as CSS from './domains/CSS';

const methods: any = {
  'DOM.enable': noop,
  'DOM.getDocument': DOM.getDocument,
  'DOM.requestChildNodes': DOM.requestChildNodes,

  'Log.enable': noop,

  'Network.enable': noop,

  'Page.getResourceTree': Page.getResourceTree,

  'Runtime.discardConsoleEntries': Runtime.discardConsoleEntries,
  'Runtime.enable': Runtime.enable,
  'Runtime.evaluate': Runtime.evaluate,
  'Runtime.getProperties': Runtime.getProperties,

  'Page.enable': noop,

  'Profiler.enable': noop,

  'Audits.enable': noop,

  'CSS.enable': noop,
  'CSS.getComputedStyleForNode': CSS.getComputedStyleForNode,

  'Inspector.enable': noop,

  'Overlay.enable': noop,

  'ServiceWorker.enable': noop,
};

async function noop() {}

export default methods;