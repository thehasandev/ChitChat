import React, { useEffect, createRef, useState } from 'react'
import { TiHome } from "react-icons/ti";
import { FiMessageSquare } from "react-icons/fi";
import { HiUsers } from "react-icons/hi2";
import { LuUser2 } from "react-icons/lu";
import { PiUsersThreeFill } from "react-icons/pi";
import { RiLogoutBoxRFill } from "react-icons/ri";

import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signOut, updateProfile } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { loggedUser } from '../slices/userSlice';

import Flex from "../components/Flex"
import Modal from 'react-modal';
Modal.setAppElement('#root');

import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

import { getStorage, ref, uploadString, getDownloadURL } from "firebase/storage";
import { getDatabase, ref as dref, set, push } from "firebase/database";




const defaultSrc =
  "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg";



function Sidevar() {
  const auth = getAuth();
  const storage = getStorage();
  const db = getDatabase();

  const dispatch = useDispatch()
  const userData = useSelector((state) => state.activeUser.value)






  const navigate = useNavigate()

  let handleLogOut = () => {
    signOut(auth).then(() => {
      localStorage.removeItem("user")
      dispatch(loggedUser(null))
      navigate("/")
    }).catch((error) => {
    });
  }

  useEffect(() => {
    if (userData == null) {
      navigate("/")
    }
  }, [])

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const [image, setImage] = useState("");


  const [cropData, setCropData] = useState("#");
  const cropperRef = createRef();
  const onChange = (e) => {

    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
    }
    const storageRef = ref(storage, userData.uid);
    // Data URL string
    const message4 = cropperRef.current?.cropper.getCroppedCanvas().toDataURL()
    uploadString(storageRef, message4, 'data_url').then((snapshot) => {
      getDownloadURL(storageRef).then((downloadURL) => {

        updateProfile(auth.currentUser, {
          photoURL: downloadURL
        }).then(() => {
          set(dref(db, 'users/' + userData.uid), {
            userName: userData.displayName,
            userImg: downloadURL
          }).then(() => {
            setIsOpen(false)
            dispatch(loggedUser({ ...userData, photoURL: downloadURL }))
            localStorage.setItem(JSON.stringify({ ...userData, photoURL: downloadURL }))
          })
        })
      });
    })
  };






  return (
    <div>
      <div className=' h-screen bg-white shadow-xl px-8'>
        {
          userData &&
          <Flex className="items-center w-32 gap-x-2 mt-5 ">
            <div>
              <img src={userData.photoURL} alt="profile" className='w-9 h-9 rounded-full' />
            </div>
            <div onClick={openModal} className='cursor-pointer'>
              <h4 className='font-intel font-semibold text-base text-primary '>{userData.displayName}</h4>
              <p className='font-intel font-normal text-xs text-[#444444] '>Edit Profile</p>
            </div>

          </Flex>
        }

        <Link to="/home">
          <div className={`flex w-32 cursor-pointer items-center gap-x-2 mt-16  rounded-[5px] pl-3 pr-6 py-2.5 ${window.location.pathname == "/home" ? "bg-primary text-white" : "bg-transparent text-secondary"}`}>
            <TiHome size={22} />
            <p className='font-intel font-semibold  text-base'>Home</p>
          </div>
        </Link>

        <Link to="/home/chat">
          <div className={`flex w-32 cursor-pointer items-center gap-x-2 mt-8  rounded-[5px] pl-3 pr-6 py-2.5 ${window.location.pathname == "/home/chat" ? "bg-primary text-white" : "bg-transparent text-secondary"}`}>
            <FiMessageSquare size={22} />
            <p className='font-intel font-semibold  text-base'>Chat</p>
          </div>
        </Link>

        <Link to="/home/group">
          <div className={`flex w-32 cursor-pointer items-center gap-x-2 mt-8   rounded-[5px] pl-3 pr-6 py-2.5 ${window.location.pathname == "/home/group" ? "bg-primary text-white" : "bg-transparent text-secondary"}`}>
            <HiUsers size={22} />
            <p className='font-intel font-semibold  text-base'>Group</p>
          </div>
        </Link>

        <Link to="/home/friends">
          <div className={`flex w-32 cursor-pointer items-center gap-x-2 mt-8  rounded-[5px] pl-3 pr-6 py-2.5 ${window.location.pathname == "/home/friends" ? "bg-primary text-white" : "bg-transparent text-secondary"}`}>
            <LuUser2 size={22} />
            <p className='font-intel font-semibold  text-base'>Friends</p>
          </div>
        </Link>

        <Link to="/home/people">
          <div className={`flex w-32 cursor-pointer items-center gap-x-2 mt-8  rounded-[5px] pl-3 pr-6 py-2.5 ${window.location.pathname == "/home/people" ? "bg-primary text-white" : "bg-transparent text-secondary"}`}>
            <PiUsersThreeFill size={22} />
            <p className='font-intel font-semibold  text-base'>People</p>
          </div>
        </Link>

        <div onClick={handleLogOut} className='flex w-32 cursor-pointer items-center gap-x-2 mt-32  rounded-[5px] pl-3 pr-6 py-2.5'>
          <RiLogoutBoxRFill size={30} className='text-primary' />
          <p className='font-intel font-semibold text-primary text-sm'>Log Out</p>
        </div>
      </div>
      {
        userData &&
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          className=" w-96 absolute top-1/2 left-1/2 border-[gray] -translate-x-1/2 -translate-y-1/2 bg-white border-2 px-5 py-6"
        >
          <div className='h-[100px] w-[100px] overflow-hidden rounded-full'>
            {
              image ?

                <div className="img-preview" style={{ width: "100px", float: "left", height: "100px" }}></div>
                :
                <img src={userData.photoURL} />


            }
          </div>
          <h1 className='font-inter text-2xl font-semibold my-4'>Update Your Profile</h1>
          {
            image &&

            <Cropper
              ref={cropperRef}
              style={{ height: "300px", width: "300px" }}
              zoomTo={0.5}
              initialAspectRatio={1}
              preview=".img-preview"
              src={image}
              viewMode={1}
              minCropBoxHeight={100}
              minCropBoxWidth={100}
              background={false}
              responsive={true}
              autoCropArea={1}
              checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
              guides={true}
            />
          }
          <input onChange={onChange} type="file" className='my-4  file:border-0 file:bg-[gray] file:text-sm file:font-semibolda file:text-inter file:text-white file:px-2 file:rounded-[2px]  file:py-1' />
          {
            image &&
            <button onClick={getCropData} className='font-inter font-medium text-base text-white bg-primary px-6 py-2 rounded-[5px]'>Upload</button>
          }

        </Modal>
      }
    </div>




  )
}

export default Sidevar