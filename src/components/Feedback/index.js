// Write your React code here.
import {Component} from 'react'
import './index.css'

const FeedbackItem = props => {
  const {eachEmoji, imageClick} = props
  const {name, imageUrl} = eachEmoji

  return (
    <li className="emoji-container">
      <button type="button" className="button">
        <img
          src={imageUrl}
          alt={name}
          onClick={imageClick}
          className="emoji-button"
        />
      </button>
      <p className="emoji-name">{name}</p>
    </li>
  )
}

class Feedback extends Component {
  state = {formStatus: true}

  thankyouFeedback = () => {
    this.setState(prevState => ({formStatus: !prevState.formStatus}))
  }

  render() {
    const {formStatus} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="feedback-container">
        {formStatus ? (
          <ul className="feedback-inner-container">
            <h1 className="feedback-heading">
              How satisfied are you with our customer support performance?
            </h1>
            <div className="emojies">
              {emojis.map(eachEmoji => (
                <FeedbackItem
                  eachEmoji={eachEmoji}
                  key={eachEmoji.id}
                  imageClick={this.thankyouFeedback}
                />
              ))}
            </div>
          </ul>
        ) : (
          <ul className="popup-container">
            <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
            <h1 className="popup-heading">Thank You!</h1>
            <p className="popup-para">
              We will use your feedback to improve our customer support
              performance
            </p>
          </ul>
        )}
      </div>
    )
  }
}

export default Feedback
