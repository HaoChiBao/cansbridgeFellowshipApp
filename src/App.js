import './App.css';

import soup from './images/soup.jpg'
import duck from './images/duck.png'
import william from './images/william.jpg'

const makeElementDraggable = (element) => {
  var mousePosition;
  var offset = [0,0];
  
  var isDown = false;

  element.style.position = "absolute";
  element.style.transform = "translate(-50%, -50%)";

  element.addEventListener('mousedown', function(e) {
      isDown = true;
      offset = [
          element.offsetLeft - e.clientX,
          element.offsetTop - e.clientY
      ];
  }, true);

  document.addEventListener('mouseup', function() {
      isDown = false;
  }, true);
  
  document.addEventListener('mousemove', function(event) {
      event.preventDefault();
      if (isDown) {
          mousePosition = {
  
              x : event.clientX,
              y : event.clientY
  
          };
          element.style.left = (mousePosition.x + offset[0]) + 'px';
          element.style.top  = (mousePosition.y + offset[1]) + 'px';
      }
  }, true);
  
}

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

const spawnDuck = () => {
  const body = document.querySelector('.cansbridge')
  const img = document.createElement('img')
  img.src = duck
  img.alt = 'duck'
  img.title = 'move me!'
  img.className = 'duck'
  
  const width = randomNumber(50, 200)
  img.style.left = `${randomNumber(width, window.innerWidth-width*1.5)}px`
  
  // keep it in the viewport
  img.style.top = `${randomNumber(1, 3000)}px`
  // img.style.top = `${randomNumber(0, window.innerHeight)}px`
  img.style.width = `${width}px`
  img.style.rotate = `${randomNumber(0, 360)}deg`
  
  makeElementDraggable(img)
  body.appendChild(img)
}

const killAllDucks = () => {
  const body = document.querySelector('.cansbridge')
  const ducks = document.querySelectorAll('.duck')
  ducks.forEach(duck => {
    body.removeChild(duck)
  })
}

window.onload = () => {
  // console.log(body)
  for(let i = 0; i < 20; i++) {
    spawnDuck()
  }
}

const  App = () => {
  return (
    <div className='cansbridge'>
      <button className = 'duckButton' onClick={spawnDuck}>spawn duck</button>
      <button className = 'killButton' onClick={killAllDucks}>kill ducks</button>

      <header>
        <div className='title'>
          <h1>James Yang's</h1>
          <h2>Cansbridge Fellowship Application</h2>

        </div>
        <div className='image'>
          <img src={soup} alt='soup' />
        </div>

        <div className='theDucks'>
            <h3>why are there ducks?</h3>
            <p>because i wouldn't want you to get bored, try moving them around!</p>
        </div>
      </header>

      <main>

        <div className='theSite'>
          <h3>About this site</h3>
          <p>This site was created for <b>James Yang's</b> 2024 cohort Cansbridge Fellowship Application. Made and styled completely made from scratch (meaning from nothing, not the programming language) and no boilerplate .</p>
          <p></p>
        </div>

        <div className='about'>
          <h3>Read this please</h3>
          <p className='idea'>
            The idea of this site is to get a few more words in than the application would allow me. Theres a chance no one is even reading this...
          </p>

          <div className = "why">
           <h3>Why do I want to be a Cansbridge Fellow?</h3>
           <iframe id = "myvideo" width="1583" height="741" src="https://www.youtube.com/embed/sGCsnVjODAc" title="James Yang&#39;s Cansbridge Application" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          </div>


          <div className='aboutText'>
            <p>I discovered the Cansbridge Fellowship in a funny way. I got an email promising free food.</p>
            <p>After listening to the alumni fellows and William Yu speak, I fell in love 💖 Never have I been so inspired, motivated, synonym.</p>
            
            <div className='quote'>
              <div className='text'>
                  <h3>"You won the sperm race"</h3>
                  <p> ~ William Yu</p>
              </div>
              <img src={william} alt='william' />
            </div>

            <p>Out of all the amazing speeches and testimonies from William and different fellows this quote stood out to me. It stood out because it was funny and oddly motivating. Most importantly it displayed confidence, and individuality. I mean seriously, who talks like that? I loved it, I want a piece of that confidence</p>
            <p>Communication was one of the biggest problems I used to have. Public speaking mainly. I still have trouble with it. Whenever I'm given the chance I try to improve this skill. I've recently become acquitted to my "Vocal Image." I focus on taking strong pauses instead of saying "um" and "uh". One of the biggest things I am looking to improve by being apart of this fellowship, is my Communication skills  </p>
            <p>It's hard for me to place myself outside of my comfort zone and this fellowship would force me to push way past the extent I'm usually comfortable with.</p>
          </div>
        </div>

        
        <div className='applicationQuestions'>
        
          <div className='questionsTitle'>
            Application answers
          </div>

          <div className='questions'>
            <h3>Tell us about a time you failed and how you handled it?</h3>
            <p>I failed to get into Waterloo computer science, here’s how I handled it. Being a second-generation Chinese Canadian my parents have high expectations. I can’t count all the outside classes and lessons I’ve received. I did other things too. I played volleyball outside of school for 5 years. I absolutely loved playing but stopped in grade 12. So, I could focus on my studies. Studying computer science, Waterloo seemed like the best on paper. I applied to my “dream university,” and others. Finally, all my EXPECTATIONS weighed against REALITY. Was I good enough to get in? No. I was rejected. It really hurt getting rejected, mostly because school was “THE GRAND” measure of success. What do I do now? I started taking time to focus on my presence outside of school. I made apps and started playing volleyball again. I stopped seeking validation from school, and started thinking about how the concepts I learn in school can be used outside of school. I carried this mindset into my first year at Western University, I joined clubs. I won hackathons. I made a network of friends. I turned Western into my “dream university.”</p>
          </div>
          <div className='questions'>
            <h3>What is something you could talk about for hours?</h3>
            <p>Baymax. I could talk about Baymax for hours. Baymax is an animated character from the movie Big-Hero 6. He’s a robot, capable of diagnosing health conditions, holding a conversation, and being a cuddly buddy. Why can I talk about him for hours? Because it’s my dream to make him in real life. With regards to my education, I often measure myself by thinking “How close am I to making Baymax.” I’m even planning on doing a dual-degree with CS and Mechatronics. There are some unrealistic features to his design, like his ability to fly, but my goal is to start off small. If I can give him the ability to fly, I can basically do anything, right? Regardless of feasibility I write down every idea that comes into my head on a Notion page, regarding the materials, software, and hardware that is required. Interestingly, Baymax is being built at Carnegie Mellon University, but my only gripe is that it pays zero attention to the original design. I think somewhere along the way, they focused on feasibility over design. I believe they lost the spirit of the project, which is something I want to fix when I start developing.</p>
          </div>
          <div className='questions'>
            <h3>What scares you?</h3>
            <p>I’m scared of dying. No, I lied. I’m scared of dying with regrets. Perhaps that’s not right either. It’s hard to believe that nobody dies without any regrets. I don’t want to wake up one day and regret not taking action with my life. The scariest part about it, is not knowing it’s happening. Overtime I may slowly become complacent, lose my ambition, and have my dreams stay as fantasies. I’m pursing computer science and engineering because I enjoy developing apps and creating unconventional products for myself. I’m developing my technical skills to create solutions for problems that I find in my life. A dream of mine is designing and developing one of these products and having it used by everyone in North America. Do I know where to start? No. Will I probably fail? Yes. Do I have the courage to try? Yes (: Losing the ambition to ideate on my ideas would become my greatest regrets in the future. As scary as this sounds, I’m grateful to say that I’m surrounded by an abundance of hard-working and ambitious friends. So, for now I’ll focus on what I’m doing in the present and worry less about the future.</p>
          </div>
        </div>

      </main>
      <footer>
          <div className='footerText'>
            <p>Created by James Yang</p>
            <p>2023/10/10</p>
          </div>
          <div className='footerLinks'>
            <a href='https://github.com/HaoChiBao' target='_blank'>
              {/* github icon */}
              <img src='https://img.icons8.com/ios-filled/50/000000/github.png' alt='github' />
            </a>
            <a href='https://www.linkedin.com/in/james-yang-054433251/' target='_blank'>
              {/* linkedin icon */}
              <img src='https://img.icons8.com/ios-filled/50/000000/linkedin.png' alt='linkedin' />
            </a>
            <a href='https://www.instagram.com/jamesyang.jpg/' target='_blank'>
              {/* instagram icon */}
              <img src='https://img.icons8.com/ios-filled/50/000000/instagram-new.png' alt='instagram' />
            </a>
          </div>
      </footer>
    </div>
  );
}

export default App;
