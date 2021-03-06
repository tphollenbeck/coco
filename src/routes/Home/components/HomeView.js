import React from 'react'
import classes from './HomeView.scss'

import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router'
import Modal from 'react-modal'

type Props = {

}

const modalStyles = {
  overlay : {
    position          : 'fixed',
    backgroundColor   : 'rgba(0, 0, 0, 0.4)'
  },
  content : {
    position                   : 'absolute',
    margin                     : '0px auto',
    top                        : '100px',
    height                     : '250px',
    width                      : '500px',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    borderRadius               : '20px',
    padding                    : '30px'
  }
}

export class HomeView extends React.Component {
  props: Props

  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false
    }
  }

  openModal() {
    this.setState({modalIsOpen: true})
  }

  closeModal() {
    this.setState({modalIsOpen: false})
  }

  render() {
    return (
      <div>
        <div className={classes.headerMajor}>You're Only 4 Steps From Leaving Law and Starting Your New Career</div>
        <div className={classes.headerMinor}>Whether you're just starting your search or know the career you want to
          transition into, we can help you navigate your career change.
        </div>
        <div className={classes.stepsContainer}>
          <div className={classes.stepContainer}>
            <div className={classes.stepContent}>
              <div className={classes.stepImage}>
                <FontAwesome className={classes.stepOneIcon} name='search'/>
              </div>
              <div className={classes.stepTitleMinor}>Step 1</div>
              <div className={classes.stepTitleMajor}>Explore</div>
              <p className={classes.stepDescription}>Browse through careers that lawyers commonly transition to. See info
                on
                salary, day-to-day tasks, and transferable skills.</p>
            </div>
          </div>
          <div className={classes.stepContainer}>
            <div className={classes.stepContent}>
              <div className={classes.stepImage}>
                <FontAwesome className={classes.stepTwoIcon} name='user'/>
              </div>
              <div className={classes.stepTitleMinor}>Step 2</div>
              <div className={classes.stepTitleMajor}>Interact</div>
              <p className={classes.stepDescription}>Get connected to former lawyers who have made the exact career change
                you're looking to make.</p>
            </div>
          </div>
          <div className={classes.stepContainer}>
            <div className={classes.stepContent}>
              <div className={classes.stepImage}>
                <FontAwesome className={classes.stepThreeIcon} name='arrow-circle-o-up'/>
              </div>
              <div className={classes.stepTitleMinor}>Step 3</div>
              <div className={classes.stepTitleMajor}>Learn</div>
              <p className={classes.stepDescription}>Develop the skills and industry knowledge you need to get the job and
                be
                successful in your new career.</p>
            </div>
          </div>
          <div className={classes.stepContainer}>
            <div className={classes.stepContent}>
              <div className={classes.stepImage}>
                <FontAwesome className={classes.stepFourIcon} name='hand-o-right'/>
              </div>
              <div className={classes.stepTitleMinor}>Step 4</div>
              <div className={classes.stepTitleMajor}>Prepare</div>
              <p className={classes.stepDescription}>Receive resume, application and interview strategy help from a team
                of
                career change experts.</p>
            </div>
          </div>
        </div>
        <div className={classes.buttonContainer} onClick={this.openModal.bind(this)}>
          Get Started
        </div>
        <Modal isOpen={this.state.modalIsOpen}
               onRequestClose={this.closeModal.bind(this)}
               style={modalStyles}>
          <div className={classes.modalBanner}></div>
          <div className={classes.modalMessage}>
            Do you already know which non-legal career you want to transition into?
          </div>
          <div className={classes.modalRedirectButtons}>
            <Link className={classes.modalRedirectButton} to='/signup'>Yes</Link>
            <Link className={classes.modalRedirectButton} to='/career_search'>No</Link>
          </div>
        </Modal>
      </div>
    )
  }
}

export default HomeView
