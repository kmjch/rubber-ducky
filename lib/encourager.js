'use babel';

import EncouragerView from './encourager-view';
import { CompositeDisposable } from 'atom';

const encouragements = [
    "You can do it!",
    "Don't give up!",
    ":) Smiley face is rooting for you!",
    "I believe in you!",
    "Just keep swimming. -Dory",
    "BELIEVE!",
    "There are better times ahead.",
    "I believe that we will win!",
    "If this were easy, it wouldn't be as fun.",
    "Don't quit!",
    "Take a break. You deserve it!",
    "You go!",
    "You got this!",
]

export default {

  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'encourager:fetch': () => this.fetch()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  fetch() {
    let editor
    if (editor = atom.workspace.getActiveTextEditor()) {
      editor.insertText(encouragements[Math.floor(Math.random() * encouragements.length)]);
    }
  }

};
