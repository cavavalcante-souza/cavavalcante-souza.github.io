(function()
{window.addEventListener('load', function() 
  {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    /*var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) */

      $('#startbtn').click(function(){
        if ($('select').val() == "Níveis do jogo"){
          $('select')[0].classList.add('is-invalid');
        }
        else{
        $('select')[0].classList.remove('is-invalid');

        document.location.href = `app.html?${$('select').val()}`,true;
        }

      })
    })
  })();

$("#reset").click( ()=> window.location.href = 'index.html');