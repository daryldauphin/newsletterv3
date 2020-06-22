import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentFrame, setCurrentFrame] = useState(0)
  return (
    <div>
{currentFrame === 0 && 
      <section>
        <form>
          <div className="form_heading center">
            <h1>join the list</h1>
            <h2>SIGN UP FOR</h2>
            <h2>THE IN-Dex NEWSLETTER</h2>
          </div>

          <div className="form_input center">
            <input className="email" type="text" name="name" placeholder="Enter Email Address"></     input>         
            <input className="button" type="submit" value="NEXT"onClick={() => setCurrentFrame(currentFrame + 1)} />
          </div>
          
          <div className="form_privacy--float">
              <input type="checkbox" name="subscribe" value="newsletter"></input>   
              <h1>I agree to receive information from <br /> Interactive Nerd in accordance with the <br /> following Privacy Policy.</h1>
          </div>
          </form>
      </section>
    }
    {currentFrame === 1 && 
      <section>
        <form>
          <div className="form_heading center">
            <h1>join the list</h1>
            <h2>Almost Done! Please Enter<br /> Your First and Last Name.</h2>
          </div>

          <div className="form_input--2 center">
            <div className="emailGroup">
                <input className="emailOne " type="text" name="name" placeholder="First Name"></     input>   
                <input className="emailTwo" type="text" name="name" placeholder="Last Name"></     input> 
            </div>
            <input className="button" type="submit" value="SIGN UP"onClick={() => setCurrentFrame(currentFrame + 1)} />
          </div>
          
          <div className="form_privacy--float">
              <input className="signup" type="checkbox" name="subscribe" value="newsletter"></input>   
              <h1>I agree to receive information from <br /> Interactive Nerd in accordance with the <br /> following Privacy Policy.</h1>
          </div>
          </form>
      </section>
    }
    {currentFrame === 2 && 


<section>
        <form>
          <div className="form_heading center">
            <h1>congratulations!</h1>
            <h2>Thank You For <br />Signing Up!</h2>
            <h2 className="congrats">Look out for the latest news on <br />
your favorite shows.</h2>
          </div>

          
          </form>
      </section>        
    }
      
    </div>
  );
}

export default App;
