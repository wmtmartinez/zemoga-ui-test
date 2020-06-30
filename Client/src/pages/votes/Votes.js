/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { Link } from 'react-router-dom';

import './Votes.scss';

export const VotesComponent = () => (
  <div className="VotesComponent">
    <header className="main-header">
      <div className="gradient-background"> </div>

      <section className="main-header__title">
        <h2 className="main-header__text">Rule of Thumb.</h2>
        <section className="main-header__nav">

          <nav className="main-header__links">
            <Link className="menu-item" to="/pasttrials">Past Trials</Link>
            <Link className="menu-item" to="/howitworks">How It Works</Link>
            <Link className="menu-item" to="/login">Log In / Sign Up</Link>
            <button className="menu-search"></button>
          </nav>
        </section>

      </section>

      <section className="main-header__opinion-card">
        <article>
          <h6 className="opinion-card__subtitle">What's your opinion on</h6>
          <h1 className="opinion-card__title">Pope Francis?</h1>
          <p className="opinion-card__text">
            He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up) 
          </p>
          
          <p className="opinion-card__moreinfo">              
            <span className="wiki-icon"></span> <a href='www.google.com'> More information </a> 
          </p>
          <p className="opinion-card__vote-text">What's Your Veredict?</p>
        </article>  
        <footer className="opinion-card__footer">
          <section className="votes-container">
            <div className="vote-thumb-up"> </div>
            <div className="vote-thumb-down"> </div>
          </section>
        </footer>
      </section>
    
      <footer className="main-header__counting-days">
        <section className="counting-days__closing"> <span>CLOSING IN</span> </section>
        <section className="counting-days__days-left"> <span> <b>22</b> days </span> </section>
      </footer>
    </header>

    <main>
      <section className="vote-note">
        <article className="vote-note__left-text">
          <p className="vote-note__minor-text">Speak out. Be heard.</p>
          <p className="vote-note__higher-text">Be counted</p>
        </article>
        <article className="vote-note__right-text">
          <p>Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.</p>
        </article>
        <div className="button-close"></div>
      </section>

      <section className="characters-section">

        <h5>Previous Rulings</h5>

        <section className="characters-section__container">
          
          <article className="characters-section__character kanye-west">
            <div className="character__gradient-background"></div>

            <section className="character__content">

              <section className="character__higher-vote-thumb">
                <div className="vote-box-thumb-up thumb-small-up"></div>
              </section>
              
              <h1 className="character__title">Kaney West</h1>

              <section className="character__info">
                <h6 className="info__subtitle"><b>1 month ago</b> in Entertainment</h6>
                <p className="info__description">Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.</p>

                <section className="info__votes-buttons">
                  <button className="button vote-box-thumb-up thumb-small-up"></button>
                  <button className="button vote-box-thumb-down thumb-small-down"></button>
                  <button className="info__btn-vote button button-vote">Vote now</button>
                </section>
              </section>

            </section>

            <footer className="character__votes_results">
              <section className="character__pros result-data"> 
                <div className="thumb-medium-up result-thumb-indicator"></div>
                <div className="character__pros-result result-text">64%</div>
              </section>
              <section className="character__cons result-data"> 
                <div className="character__cons-result result-text">36%</div>
                <div className="thumb-medium-down result-thumb-indicator"></div>
              </section>
            </footer>
          </article>

          <article className="characters-section__character mark-suckerberg">
            <div className="character__gradient-background"></div>

            <section className="character__content">

              <section className="character__higher-vote-thumb">
                <div className="vote-box-thumb-down thumb-small-down"></div>
              </section>

              <h1 className="character__title">Mark Zuckerberg</h1>

              <section className="character__info">

                <h6 className="info__subtitle"><b>1 month ago</b> in Business</h6>

                <p className="info__description">Thank you for voting!.</p>

                <section className="info__votes-buttons">
                  <button className="button info__btn-vote button-vote">Vote again</button>
                </section>

              </section>

            </section>

            <footer className="character__votes_results">
              <section className="character__pros result-data"> 
                <div className="thumb-medium-up result-thumb-indicator"></div>
                <div className="character__pros-result result-text">36%</div>
              </section>
              <section className="character__cons result-data"> 
                <div className="character__cons-result result-text">64%</div>
                <div className="thumb-medium-down result-thumb-indicator"></div>
              </section>
            </footer>
          </article>

          <article className="characters-section__character cristina">
            <div className="character__gradient-background"></div>

            <section className="character__content">
              
              <section className="character__higher-vote-thumb">
                <div className="vote-box-thumb-down thumb-small-down"></div>
              </section>

              <h1 className="character__title">Cristina Fernández de Kirchner</h1>

              <section className="character__info">
               
                <h6 className="info__subtitle"><b>1 month ago</b> in Politics</h6>
                <p className="info__description">Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.</p>

                <section className="info__votes-buttons">
                  <button className="button vote-box-thumb-up thumb-small-up"></button>
                  <button className="button vote-box-thumb-down thumb-small-down"></button>
                  <button className="info__btn-vote button button-vote">Vote now</button>
                </section>

              </section>

            </section>

            <footer className="character__votes_results">
              <section className="character__pros result-data"> 
                <div className="thumb-medium-up result-thumb-indicator"></div>
                <div className="character__pros-result result-text">36%</div>
              </section>
              <section className="character__cons result-data"> 
                <div className="character__cons-result result-text">64%</div>
                <div className="thumb-medium-down result-thumb-indicator"></div>
              </section>
            </footer>
          </article>

          <article className="characters-section__character malala">
            <div className="character__gradient-background"></div>

            <section className="character__content">

              <section className="character__higher-vote-thumb">
                <div className="vote-box-thumb-up thumb-small-up"></div>
              </section>

              <h1 className="character__title">Malala Yousafzai</h1>

              <section className="character__info">
                <h6 className="info__subtitle"><b>1 month ago</b> in Entertainment</h6>
                <p className="info__description">Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.</p>

                <section className="info__votes-buttons">
                  <button className="button vote-box-thumb-up thumb-small-up"></button>
                  <button className="button vote-box-thumb-down thumb-small-down"></button>
                  <button className="info__btn-vote button button-vote">Vote now</button>
                </section>

              </section>

            </section>

            <footer className="character__votes_results">
              <section className="character__pros result-data"> 
                <div className="thumb-medium-up result-thumb-indicator"></div>
                <div className="character__pros-result result-text">64%</div>
              </section>
              <section className="character__cons result-data"> 
                <div className="character__cons-result result-text">36%</div>
                <div className="thumb-medium-down result-thumb-indicator"></div>
              </section>
            </footer>
          </article>

        </section>
      </section>

      <section className="addional-information">
        <p>Is there anyone else you would want us to add?</p>
        <button className="button button-clear">Submit a Name</button>
        <div className="background-opacity"></div>
      </section>

      <div className="divider"/>

      <footer className="main-footer">
        <nav className="contact">
          <a href="www.google.com">Terms and Conditions</a>
          <a href="www.google.com">Privacy Policy</a>
          <a href="www.google.com">Contact Us</a>
        </nav>
        <nav className="social-network">
          <span target="_blank" className="footer__follow" rel="noopener noreferrer">Follow Us</span>
          <a target="_blank" className="footer__facebook" href="https://www.facebook.com/Zemoga?fref=ts" rel="noopener noreferrer"></a>
          <a target="_blank" className="footer__twitter" href="https://twitter.com/Zemoga" rel="noopener noreferrer"></a>
        </nav>
      </footer>
    </main>
  </div>
)