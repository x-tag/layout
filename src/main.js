(function(){

  function maxContent(layout){
    layout.setAttribute('content-maximizing', null);
  }

  function minContent(layout){
    layout.removeAttribute('content-maximized');
    layout.removeAttribute('content-maximizing');
  }

  xtag.register('x-layout', {
    events: {
      transitionend: function(e){
        var node = e.target;
        if (this.hasAttribute('content-maximizing') && node.parentNode == this && (node.nodeName.toLowerCase() == 'header' || node.nodeName.toLowerCase() == 'footer')) {
          this.setAttribute('content-maximized', null);
          this.removeAttribute('content-maximizing');
        }
      },
      'tap:delegate(section)': function(e){
        var layout = e.currentTarget;
        if (layout.hideTrigger == 'tap' && !layout.maxcontent && this.parentNode == layout) {
          if ((layout.hasAttribute('content-maximizing') || layout.hasAttribute('content-maximized'))) {
            minContent(layout);
          } else {
            maxContent(layout);
          }
        }
      },
      leave: function(e){
        if (this.hideTrigger == 'hover' && !this.maxcontent && !this.hasAttribute('content-maximized')) {
          maxContent(this);
        }
      },
      enter: function(e){
        if (this.hideTrigger == 'hover' && !this.maxcontent && (this.hasAttribute('content-maximized') || this.hasAttribute('content-maximizing'))) {
          minContent(this);
        }
      }
    },
    accessors: {
      hideTrigger: {
        attribute: { name: 'hide-trigger' }
      },
      maxcontent: {
        attribute: { boolean: true },
        set: function(value){
          if (value) {
            maxContent(this);
          } else if (!this.hasAttribute('content-maximizing')) {
            minContent(this);
          }
        }
      }
    }
  });

})();
