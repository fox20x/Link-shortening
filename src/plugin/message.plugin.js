function showMessage(message){
  var uiMessage = message,
      timeOut = 2000,
      timeOutUp = timeOut - 1700;

  if(uiMessage){
    for (var i = 0; i < uiMessage.length; i++) {
      var uiMessage = uiMessage[i];
      showAndHideMessage();
    }
  }

  function showAndHideMessage(){
    uiMessage.style.display = 'flex';

    uiMessage.classList.add('fadeInDown');
    uiMessage.classList.remove('fadeOutUp');

    setTimeout(function() {
      setTimeout(function(){
        uiMessage.style.display = 'none';
      }, timeOutUp);

      uiMessage.classList.add('fadeOutUp');
      uiMessage.classList.remove('fadeInDown');
    }, timeOut);
  }

}

export default {
  install( Vue, options ) {
    Vue.prototype.$message = function( message ) {
      return showMessage(`<div class="ui-message" id="exampleMessage"><span class="message-title">${message}</span></div>`)
    }
  }
}