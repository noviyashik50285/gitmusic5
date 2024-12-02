spop.defaults = {
  template  : null, // string required. Without it nothing happens!
  style : 'info',// success, warning or error
  autoclose : 11000,// miliseconds
  position  : 'top-right',// top-left top-center bottom-left bottom-center bottom-right
  icon  : false,// or false
  group : false,// string, add a id reference
  onOpen: function() { },
  onClose   : function() { }
};
spop('<h2 class="spop-title">При наведении курсора на верх экрана (рабочего окна) в середине появится кнопна для включения и отключения главного меню.</h2>');
// spop('<h2 class="spop-title">При наведении курсора на левый верхний угол экрана появится кнопна для включения и отключения главного меню.</h2><p class="vnizuspan">Это окно само не закроется</p>');

spop.defaults = {
style : 'info',// success, warning or error
autoclose : 5000,// miliseconds
position  : 'top-left',// top-left top-center bottom-left bottom-center bottom-right
icon  : false,// or false
};
spop('<h2 class="spop-title">На боковых панелях - дополнительное меню.</h2>');

