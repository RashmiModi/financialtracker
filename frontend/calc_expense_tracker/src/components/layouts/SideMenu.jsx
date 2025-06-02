import React, { useContext } from 'react';
import { SIDE_MENU_DATA } from '../../utils/data';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import CharAvatar from '../Cards/CharAvatar';
import { BASE_URL } from '../../utils/apiPaths';
const SideMenu = ({ activeMenu }) => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

    const userProfileImage = user?.profileImageUrl ? `${BASE_URL}/uploads/${user.profileImageUrl}` : 'https://via.placeholder.com/150';
  console.log("User Profile Image:---->>>>", userProfileImage);
const handleClick = (item) => {
  if (item.label === 'Logout') {
    handleLogout();
  } else {
    navigate(item.path);
  }
};

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate('/login');
  };

  return (
    <div className="w-64 h-[calc(100vh-61px)] bg-white  border-r border-gray-200/50 p-5 stick-top z-20 ">
      <div className="flex flex-col items-center justify-center gap-3 mt-3 mb-7">

        {user?.profileImageUrl ? (
          <img
            src={user?.profileImageUrl||""}
            alt='Profile'
            className='w-20 h-20 bg-slate-400 rounded-full'
            loading="lazy"
          />
        ):(
        <CharAvatar
             fullName={user?.fullName} 
             width="w-20"
              height="h-20"
               style="text-xl"
           />
        )}
        <h5 className='text-gray-950 font-medium leading-6'>{user?.fullName || ''}</h5>
      </div>
      {SIDE_MENU_DATA.map((item, index) => (
        <button type='button'
          key={`menu_${index}`}
          className={`w-full flex items-center gap-4 text-[15px]
             ${activeMenu==item.label? "text-white bg-purple-500":" "} py-3 px-6 rounded-lg mb-3`}
          onClick={() => handleClick(item)}
        >
          <item.icon  className="text-xl"/>
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default SideMenu;
