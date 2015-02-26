// Create new app
Cut(function(root, container) {

  // Subscribe to Cut.Mouse
  Cut.Mouse(root, container);

  // Set view box
  root.viewbox(300, 200);

  // Create an image node, append it to root and align it to center
  Cut.image('box').appendTo(root).pin('align', 0.5)
    // On mouse click...
    .on('click', function(point) {
      // Tween scale values of this node
      this.tween().clear().ease('bounce').pin({
        scaleX : Math.random() + 0.5,
        scaleY : Math.random() + 0.5
      });
    });
  
});

// Register an image texture
Cut({
  imagePath : 'sample.png',
  cutouts : [
    { name : 'box', x : 0, y : 0, width : 30, height : 30 }
  ]
});