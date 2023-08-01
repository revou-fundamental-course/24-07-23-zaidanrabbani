let slideIndex = 0;
        showSlides();
        
        function showSlides() {
          let i;
          let slides = document.getElementsByClassName("mySlides");
          let dots = document.getElementsByClassName("dot");
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
          }
          slideIndex++;
          if (slideIndex > slides.length) {slideIndex = 1}    
          for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " active";
          setTimeout(showSlides, 5000); // Change image every 5 seconds
        }
        function validateForm() {
          let x = document.forms["myForm"]["fname"].value;
          if (x == "") {
            alert("Name must be filled out");
            return false;
          }
        }
        function validateForm() {
          // Mengambil nilai input dari form
          var name = document.getElementById("name").value;
          var email = document.getElementById("email").value;
          var ntelp = document.getElementById("ntelp").value;

          // Memeriksa apakah semua kolom telah diisi
          if (name === "" || email === "" || ntelp === "") {
              alert("Mohon isi seluruh kolom sebelum submit!");
              return false; // Menghentikan proses submit
          }

          // Memeriksa apakah nama hanya mengandung huruf dan spasi
          if (!/^[a-zA-Z\s]+$/.test(name)) {
              alert("Kolom nama hanya diizinkan untuk diisi dengan huruf dan spasi saja.");
              return false; // Menghentikan proses submit
          }

          // Memeriksa apakah email memiliki format yang valid
          if (!/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(email)) {
              alert("Masukkan email yang valid (contoh: user@example.com).");
              return false; // Menghentikan proses submit
          }

          // Memeriksa apakah nomor telepon hanya mengandung angka
          if (!/^[0-9]+$/.test(ntelp)) {
              alert("Kolom nomor telepon hanya diizinkan untuk diisi dengan angka saja.");
              return false; // Menghentikan proses submit
          }

          return true; // Lanjutkan proses submit jika semua kolom telah diisi dengan benar
      }