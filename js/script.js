$("#imagens img").mouseover(function(){
	idImagem = $(this).attr("id");

	depoimento = "";

	if(idImagem == "img01"){
		depoimento = "Euismod elementum nisi quis eleifend quam adipiscing. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Pellentesque sit amet porttitor eget. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Nisl nisi scelerisque eu ultrices vitae. Risus ultricies tristique nulla aliquet enim tortor at. Nulla facilisi morbi tempus iaculis urna. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper. Viverra maecenas accumsan lacus vel. Phasellus egestas tellus rutrum tellus pellentesque. Natoque penatibus et magnis dis. Vestibulum lorem sed risus ultricies tristique. Cursus mattis molestie a iaculis at.";
	}else if(idImagem == "img02"){
		depoimento = "Lobortis feugiat vivamus at augue eget arcu dictum. Ultricies lacus sed turpis tincidunt id. Tristique senectus et netus et malesuada fames ac. Tortor at risus viverra adipiscing at in tellus. Mauris pharetra et ultrices neque ornare aenean. Vulputate ut pharetra sit amet aliquam. Amet aliquam id diam maecenas ultricies mi. Turpis cursus in hac habitasse platea dictumst. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Neque laoreet suspendisse interdum consectetur libero.";
	}else if(idImagem == "img03"){
		depoimento = "Et molestie ac feugiat sed lectus vestibulum mattis. Nisl pretium fusce id velit. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est. Etiam tempor orci eu lobortis elementum. Ut lectus arcu bibendum at varius vel pharetra. Est lorem ipsum dolor sit amet consectetur adipiscing. Volutpat maecenas volutpat blandit aliquam. Ut aliquam purus sit amet. Amet cursus sit amet dictum sit amet justo donec. Quam vulputate dignissim suspendisse in est ante in nibh. Cursus vitae congue mauris rhoncus aenean.";
	}else if(idImagem == "img04"){
		depoimento = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor id eu nisl nunc mi ipsum faucibus vitae. Non sodales neque sodales ut etiam sit amet nisl purus. Eu volutpat odio facilisis mauris sit amet. Et tortor consequat id porta nibh. Amet purus gravida quis blandit turpis cursus in hac. Sit amet nulla facilisi morbi tempus iaculis. Nulla pellentesque dignissim enim sit amet. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Nunc sed velit dignissim sodales ut eu sem integer. Justo nec ultrices dui sapien eget mi proin sed. Nullam ac tortor vitae purus faucibus ornare suspendisse. Feugiat scelerisque varius morbi";
	}else{
		depoimento = "Depoimento padrão"
	}
	$("#texto").text(depoimento);
});