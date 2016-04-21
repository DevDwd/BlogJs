
 var socket = io.connect('http://localhost:3000');
// On demande le pseudo au visiteur...
    var pseudo = prompt('Quel est votre pseudo ?');
// Et on l'envoie avec le signal "petit_nouveau" (pour le différencier de "message")
    socket.emit('petit_nouveau', pseudo);
    //$('#author').html(pseudo);
    socket.on('new_talker',function (data) {
    	 /* body... */
    	 $('#message-row').append('<tr><td>'+ pseudo + '</td><td>online</td></tr>');
    });
    socket.on('message', function (data) {
		 		 /* body... script pour ajouter une nouvelle div*/ 
		 		 console.log('message');
		 		 $('#preview').append('<div><span>'+ data.author + ':</span><br/><p style="text-indent:3em;">' + data.content+'</p><span class="pull-right">'+ data.date +'</span></div><br/>');
		 		 //alert(data);
		 	} );
	function fonction()
		{
	        console.log('bing');
	        var task = {
	        	'content': 'content',
	        };

	        //task.title = document.getElementById("title").value;
	        console.log(task);
	        task.content = document.getElementById('msg-content').value;

	        // console.log(task);
	       
	        //envoi de la tache
		 	socket.emit('fill', task);
		 	var id = 'amirmuerte@gmail.com';
		 	//     socket.on('message', function (data) {
		 	// 	 /* body... script pour ajouter une nouvelle div*/ 
		 	// 	 console.log('message');
		 	// 	 $('#preview').append('<div><span>'+ data.author + '</span><br/>' + data.content+'</div><br/>');
		 	// 	 //alert(data);
		 	// } );
		 	//confirmation de reception

		}
	$("#msg-content").keypress(function(event) {
    if (event.which == 13) {
        event.preventDefault();
        fonction();
    }
});
	$('#msg-submit').on('click', function(event) {
		event.preventDefault();
		fonction();
		console.log('voila');
		/* Act on the event */
	});