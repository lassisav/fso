import '../index.css'
const ErrorNotification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className="errornotif">
        {message}
      </div>
    )
}

export default ErrorNotification