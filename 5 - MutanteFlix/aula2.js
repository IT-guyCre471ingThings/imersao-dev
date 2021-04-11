function selecMutante(){
  var mttEscolhido = document.getElementById("mutantes").value;
  var imgMtt = document.getElementById("imgMtt");
  var descricao = document.querySelector(".descricao");
    
  if(mttEscolhido == "Choose"){
    imgMtt.src = "https://www.slashfilm.com/wp/wp-content/images/xmen-cerebro-door.jpg";    
  } else if(mttEscolhido == "Xavier"){
    imgMtt.src = "https://i.pinimg.com/originals/d2/16/c7/d216c77ef9707b1d93f503146c0285f2.jpg";
    descricao = "<p><a href='https://www.imdb.com/name/nm0564215/?ref_=rvi_nm'> James McAvoy </a></p>";
    document.querySelector(".descricao").insertAdjacentHTML("afterbegin", descricao);
  } else if(mttEscolhido == "Magneto"){
    imgMtt.src = "https://images2.alphacoders.com/545/thumb-1920-545179.jpg";
    descricao = "<p><a href='https://www.imdb.com/name/nm1055413/?ref_=ttfc_fc_cl_t2'> Michael Fassbender </a></p>";
    document.querySelector(".descricao").insertAdjacentHTML("afterbegin", descricao);
  } else if(mttEscolhido == "Jean Grey"){
    imgMtt.src = "https://www.iosmode.com/wp-content/uploads/2019/03/Jean-Gray-Actress-wallpaper.jpg";
    descricao = "<p><a href='https://www.imdb.com/name/nm3849842/?ref_=ttfc_fc_cl_t9'> Sophie Turner </a></p>";
    document.querySelector(".descricao").insertAdjacentHTML("afterbegin", descricao);
  } else if(mttEscolhido == "Wolverine"){
    imgMtt.src = "https://m.media-amazon.com/images/M/MV5BNDExMzIzNjk3Nl5BMl5BanBnXkFtZTcwOTE4NDU5OA@@._V1_UX214_CR0,0,214,317_AL_.jpg";
    descricao = "<p><a href='https://www.imdb.com/name/nm0413168/?ref_=ttfc_fc_cl_t1'> Hugh Jackman </a></p>";
    document.querySelector(".descricao").insertAdjacentHTML("afterbegin", descricao);      
  }
}

function envelhecer(){
  var mttEscolhido = document.getElementById("mutantes").value;
  var imgMtt = document.getElementById("imgMtt");
  
  if(mttEscolhido == "Xavier"){
    imgMtt.src = "https://i.pinimg.com/originals/e1/f8/7f/e1f87fa03ce08c6fb9c16df408920e5f.jpg";
    descricao = "<p><a href='https://www.imdb.com/name/nm0001772/?ref_=ttfc_fc_cl_t4'> Patrick Stewart </a></p>";
    document.querySelector(".descricao").insertAdjacentHTML("beforeend", descricao);
  } else if(mttEscolhido == "Magneto"){
    imgMtt.src = "https://3.bp.blogspot.com/-emXORr-hZq0/UWbNRf7fPqI/AAAAAAAAB2U/rwe8cimAQ0M/s1600/capa.jpg";
    descricao = "<p><a href='https://www.imdb.com/name/nm0005212/?ref_=ttfc_fc_cl_t3'> Ian McKellen </a></p>";
    document.querySelector(".descricao").insertAdjacentHTML("beforeend", descricao);
  } else if(mttEscolhido == "Jean Grey"){
    imgMtt.src = "https://redlan.com.ar/wp-content/uploads/2017/07/Famke-Janssen-Jean-Grey-RedLanComics.jpg";
    descricao = "<p><a href='https://www.imdb.com/name/nm0000463/?ref_=ttfc_fc_cl_t5'> Famke Janssen </a></p>";
    document.querySelector(".descricao").insertAdjacentHTML("beforeend", descricao);
  } else if(mttEscolhido == "Wolverine"){
    imgMtt.src = "https://m.media-amazon.com/images/M/MV5BNDExMzIzNjk3Nl5BMl5BanBnXkFtZTcwOTE4NDU5OA@@._V1_UX214_CR0,0,214,317_AL_.jpg";
    descricao = "<p>Sabe que o Wolverine<br>não envelhece, né?</p>";
    document.querySelector(".descricao").insertAdjacentHTML("beforeend", descricao);
  } 
  
}








