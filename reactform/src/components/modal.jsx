



// const Modal = ({ show, message }) => {
//     const [isShowModal, setIsShowModal] = useState(false);
//     // state = { showing: show };
//     function closeModal(e) {
//         e.preventDefault();
//         console.log(isShowModal);
//         setIsShowModal(!isShowModal);
//         console.log(isShowModal);
//         this.setState({ showing: !show });
//         console.log(show);
//         show = !show
//         console.log(show);
//         this.setState(this.state);
//         console.log('I am connected');
//         }

//     return (
//         <div style={{ display: (show ? 'block' : 'none') }} className='modal'>{message}<br />
//             <button className='button' onClick = {closeModal}> Close Alert</button>
//         </div>
//     )

// };
const Modal = ({ action, message }) => {
    return (
      <div className="modal" onClick={action}>{message}</div>
    )
  };
  


export default Modal;