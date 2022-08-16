export default ()=>{
  const views = `
  <section class="contact">
        <div class="container contact__container">
            <aside class="contact__aside">
                <div class="aside__image">
                <img src="/img/contact.svg" alt=""> 
                </div>
                <h2>Contact Us</h2>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing 
                    elit.  Accusantium dicta delectus fugiat hic? Quae, autem.   
                </p>
                <ul class="contact__details">
                    <li>
                        <i class="uil uil-phone"></i> 
                        <h5>+51 000-000-000</h5>
                    </li>
                    <li>
                        <i class="uil uil-envelope"></i>
                        <h5>Suppor@clinton.com</h5>
                    </li>
                    <li>
                        <i class="uil uil-map-marker"></i>
                        <h5>Huamanga, Ayacucho</h5>
                    </li>
                </ul>
                <ul class="contact__socials">
                
                    <li><a href="https://instagram.com"><i class="uil uil-instagram"></i></a></li>
                    <li><a href="https://linkedin.com"><i class="uil uil-linkedin-alt"></i></a></li>
                    <li><a href="https://facebook.com"><i class="uil uil-facebook-f"></i></a></li>
                    <li><a href="https://twitter.com"><i class="uil uil-twitter"></i></a><li> 
                </ul>
            </aside>


            <form action="https://formspree.io/f/xgeqenlv" method="POST" class="contact__form">
                    
                <div class="form__mane">
                    <input type="text" name="First Name" placeholder="First Name" required>
                    <input type="text" name="Last Name" placeholder="Last Name" required>
                </div>
                <input type="email" name="Email Address" placeholder="Your Email Address" required>
                <textarea name="Message" rows="7" placeholder="Message" required></textarea>
                <button type="submit" class="btn btn-primary" >Send Messasge</button>
            </form>

        </div>
    </section>
` 

  const divElement= document.createElement('div');
  divElement.innerHTML = views; 
  return divElement;
}
