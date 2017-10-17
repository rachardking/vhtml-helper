'use babel';

import { CompositeDisposable } from 'atom';
import provider from './provider';

export default {
  config: {
    'language': {
      title: 'Document Language',
      type: 'string',
      default: 'zh-CN',
      enum: ['zh-CN', 'en-US'],
      order: 2,
    }
  },
  activate(state) {
    this.subscriptions = new CompositeDisposable();
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  search() {

  },

  opener(url) {

  },

  lazyLoad() {

  },

  provide() {
    return provider;
  }
};
