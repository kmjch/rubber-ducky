'use babel';

import Encourager from '../lib/encourager';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('Encourager', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('encourager');
  });

  describe('when the encourager:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.encourager')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'encourager:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.encourager')).toExist();

        let encouragerElement = workspaceElement.querySelector('.encourager');
        expect(encouragerElement).toExist();

        let encouragerPanel = atom.workspace.panelForItem(encouragerElement);
        expect(encouragerPanel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, 'encourager:toggle');
        expect(encouragerPanel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.encourager')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'encourager:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let encouragerElement = workspaceElement.querySelector('.encourager');
        expect(encouragerElement).toBeVisible();
        atom.commands.dispatch(workspaceElement, 'encourager:toggle');
        expect(encouragerElement).not.toBeVisible();
      });
    });
  });
});
