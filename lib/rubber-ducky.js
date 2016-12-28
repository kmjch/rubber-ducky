'use babel';

import RubberDuckyView from './rubber-ducky-view';
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

const responses = [
  "Uh huh.",
  "That sounds right.",
  "You're a genius!",
  "Try it!",
  "You're right.",
  "Yeah.",
  "Why not?",
  "How did you come to that conclusion?",
  "I taught you well.",
  "I'm so proud of you.",
  "Hmmm yeah!",
  "Yes.",
  "Are you sure?",
]

export default {

  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'rubber-ducky:encourage': () => this.encourage(),
      'rubber-ducky:respond': () => this.respond(),
      'rubber-ducky:draw': () => this.draw(),
    }));
  },

  encourage() {
    let editor
    if (editor = atom.workspace.getActiveTextEditor()) {
      editor.insertText(encouragements[Math.floor(Math.random() * encouragements.length)]);
    }
  },

  respond() {
    let editor
    if (editor = atom.workspace.getActiveTextEditor()) {
      editor.insertText(responses[Math.floor(Math.random() * encouragements.length)]);
    }
  },

  draw() {
    let editor
    if (editor = atom.workspace.getActiveTextEditor()) {
      editor.insertText('draw');
    }
  },

};
