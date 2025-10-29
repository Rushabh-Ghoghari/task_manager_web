export const LeftArrowIcon = ({ color, width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.57 5.92969L3.5 11.9997L9.57 18.0697"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5019 12H3.67188"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const PlanIcon = ({ bgColor, shapeColor, iconWidth, iconHeight }) => {
  let height = "104";
  let width = "104";
  if (iconWidth && iconHeight) {
    height = iconHeight;
    width = iconWidth;
  }

  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 104 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="104" height="104" rx="18" fill={bgColor} />
      <mask
        id="mask0_510_52450"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="104"
        height="104"
      >
        <rect width="104" height="104" rx="18" fill="white" />
      </mask>
      <g mask="url(#mask0_510_52450)">
        <rect x="-51" y="51" width="104" height="104" fill={shapeColor} />
        <rect
          x="51"
          y="-51"
          width="104"
          height="104"
          rx="52"
          fill={shapeColor}
        />
      </g>
    </svg>
  );
};

export const TooltipIcon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
        stroke="#808080"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8V13"
        stroke="#808080"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.9922 16H12.0012"
        stroke="#808080"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const TickIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 11.9929L8.99294 17.9859L21 6"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CopyIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.6693 8.60065V11.4007C10.6693 13.734 9.73594 14.6673 7.4026 14.6673H4.6026C2.26927 14.6673 1.33594 13.734 1.33594 11.4007V8.60065C1.33594 6.26732 2.26927 5.33398 4.6026 5.33398H7.4026C9.73594 5.33398 10.6693 6.26732 10.6693 8.60065Z"
        stroke="#808080"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6693 4.60065V7.40065C14.6693 9.73398 13.7359 10.6673 11.4026 10.6673H10.6693V8.60065C10.6693 6.26732 9.73594 5.33398 7.4026 5.33398H5.33594V4.60065C5.33594 2.26732 6.26927 1.33398 8.6026 1.33398H11.4026C13.7359 1.33398 14.6693 2.26732 14.6693 4.60065Z"
        stroke="#808080"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const EditIcon = ({ strokeColor = "#808080" }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.83958 2.4008L3.36624 8.19413C3.15958 8.41413 2.95958 8.84746 2.91958 9.14746L2.67291 11.3075C2.58624 12.0875 3.14624 12.6208 3.91958 12.4875L6.06624 12.1208C6.36624 12.0675 6.78624 11.8475 6.99291 11.6208L12.4662 5.82746C13.4129 4.82746 13.8396 3.68746 12.3662 2.29413C10.8996 0.914129 9.78624 1.4008 8.83958 2.4008Z"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.92969 3.36719C8.21635 5.20719 9.70969 6.61385 11.563 6.80052"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 14.666H14"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ArrowDownIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.2787 5.9668L8.93208 10.3135C8.41875 10.8268 7.57875 10.8268 7.06542 10.3135L2.71875 5.9668"
        stroke="#808080"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const FilterLogo = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.6641 4.33398H10.6641"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.0026 4.33398H1.33594"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66927 6.66667C7.95794 6.66667 9.0026 5.622 9.0026 4.33333C9.0026 3.04467 7.95794 2 6.66927 2C5.38061 2 4.33594 3.04467 4.33594 4.33333C4.33594 5.622 5.38061 6.66667 6.66927 6.66667Z"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6667 11.666H12"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.33594 11.666H1.33594"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.33333 14.0007C10.622 14.0007 11.6667 12.956 11.6667 11.6673C11.6667 10.3787 10.622 9.33398 9.33333 9.33398C8.04467 9.33398 7 10.3787 7 11.6673C7 12.956 8.04467 14.0007 9.33333 14.0007Z"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const AddIcon = ({ width = 24, height = 24 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 8.5H12.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 12.5V4.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const MapIcon = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36.6654 15.0031V25.0031C36.6654 29.1698 35.832 32.0865 33.9654 33.9698L23.332 23.3365L36.2154 10.4531C36.5154 11.7698 36.6654 13.2698 36.6654 15.0031Z"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36.2154 10.4526L10.4487 36.2193C5.43201 35.0693 3.33203 31.6026 3.33203 25.0026V15.0026C3.33203 6.66927 6.66536 3.33594 14.9987 3.33594H24.9987C31.5987 3.33594 35.0654 5.43594 36.2154 10.4526Z"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.9659 33.9693C32.0826 35.8359 29.1659 36.6693 24.9992 36.6693H14.9992C13.2659 36.6693 11.7659 36.5193 10.4492 36.2193L23.3326 23.3359L33.9659 33.9693Z"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.3995 13.3031C11.5328 8.41979 18.8661 8.41979 19.9995 13.3031C20.6495 16.1698 18.8495 18.6031 17.2661 20.1031C16.1161 21.2031 14.2995 21.2031 13.1328 20.1031C11.5495 18.6031 9.73279 16.1698 10.3995 13.3031Z"
        stroke="#373E4E"
        strokeWidth="1.5"
      />
      <path
        d="M15.1562 14.4974H15.1712"
        stroke="#373E4E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const UserOffIcon = ({ svgColor }) => {
  const color = svgColor ? svgColor : "white";

  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.45329 5.95961C5.58158 6.37034 5.80712 6.74402 6.11074 7.04892C6.41437 7.35383 6.78711 7.58093 7.19729 7.71094M9.53529 7.34761C9.85345 7.12315 10.1186 6.83174 10.3121 6.49386C10.5056 6.15598 10.6228 5.77982 10.6554 5.39181C10.6879 5.00381 10.6352 4.61338 10.5007 4.24795C10.3663 3.88252 10.1535 3.55097 9.87722 3.27658C9.60096 3.0022 9.26796 2.79164 8.90162 2.6597C8.53529 2.52777 8.14451 2.47766 7.75673 2.51289C7.36896 2.54813 6.99361 2.66786 6.65705 2.86366C6.3205 3.05946 6.0309 3.32659 5.80862 3.64628M4 14.5V13.1667C4 12.4594 4.28095 11.7811 4.78105 11.281C5.28115 10.781 5.95942 10.5 6.66667 10.5H9.33333C9.608 10.5 9.87333 10.5413 10.122 10.6187M11.8773 12.364C11.9573 12.6173 12 12.8873 12 13.1667V14.5M2 2.5L14 14.5"
        stroke={`${color}`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ProfileIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.1586 10.87C12.0586 10.86 11.9386 10.86 11.8286 10.87C9.44859 10.79 7.55859 8.84 7.55859 6.44C7.55859 3.99 9.53859 2 11.9986 2C14.4486 2 16.4386 3.99 16.4386 6.44C16.4286 8.84 14.5386 10.79 12.1586 10.87Z"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.15875 14.56C4.73875 16.18 4.73875 18.82 7.15875 20.43C9.90875 22.27 14.4188 22.27 17.1688 20.43C19.5888 18.81 19.5888 16.17 17.1688 14.56C14.4288 12.73 9.91875 12.73 7.15875 14.56Z"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const UserOffLg = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.17993 8.18942C8.37237 8.8055 8.71068 9.36603 9.16611 9.82339C9.62155 10.2807 10.1807 10.6214 10.7959 10.8164M14.3029 10.2714C14.7802 9.93473 15.1779 9.49762 15.4682 8.99079C15.7584 8.48396 15.9342 7.91973 15.983 7.33772C16.0319 6.75572 15.9528 6.17007 15.7511 5.62193C15.5495 5.07378 15.2302 4.57645 14.8158 4.16487C14.4014 3.7533 13.9019 3.43746 13.3524 3.23956C12.8029 3.04165 12.2168 2.96649 11.6351 3.01934C11.0534 3.07219 10.4904 3.25178 9.98558 3.54549C9.48075 3.83919 9.04636 4.23989 8.71293 4.71942M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C14.412 15 14.81 15.062 15.183 15.178M17.816 17.796C17.936 18.176 18 18.581 18 19V21M3 3L21 21"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const TrashIcon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.75 4.48486C13.2525 4.23736 10.74 4.10986 8.235 4.10986C6.75 4.10986 5.265 4.18486 3.78 4.33486L2.25 4.48486"
        stroke="#F97066"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.375 3.7275L6.54 2.745C6.66 2.0325 6.75 1.5 8.0175 1.5H9.9825C11.25 1.5 11.3475 2.0625 11.46 2.7525L11.625 3.7275"
        stroke="#F97066"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.1373 6.85498L13.6498 14.4075C13.5673 15.585 13.4998 16.5 11.4073 16.5H6.5923C4.4998 16.5 4.4323 15.585 4.3498 14.4075L3.8623 6.85498"
        stroke="#F97066"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.74756 12.375H10.2451"
        stroke="#F97066"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.125 9.375H10.875"
        stroke="#F97066"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const MoreSquareIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.991 12.002H20.009"
        stroke="#373E4E"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.991 12.002H12.009"
        stroke="#373E4E"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.991 12.002H4.009"
        stroke="#373E4E"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const SubscriptionIcon = ({
  width = 24,
  height = 24,
  strokeColor = "#373E4E",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 12H15.5"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15.5V8.5"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const FileDownloadIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19M14 3H7C6.46957 3 5.96086 3.21071 5.58579 3.58579C5.21071 3.96086 5 4.46957 5 5V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V8M14 3L19 8M12 17V11M12 17L9.5 14.5M12 17L14.5 14.5"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const HistoryIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9998 8V12L13.9998 14M3.0498 11.0001C3.2739 8.80013 4.30007 6.75968 5.93254 5.26803C7.56501 3.77639 9.6895 2.93795 11.9007 2.9127C14.1119 2.88744 16.255 3.67713 17.9211 5.1311C19.5872 6.58507 20.6597 8.60155 20.934 10.7958C21.2083 12.99 20.6651 15.2085 19.4082 17.0278C18.1512 18.8472 16.2684 20.1401 14.1191 20.6599C11.9697 21.1797 9.70421 20.89 7.7548 19.8461C5.80539 18.8022 4.30853 17.0772 3.5498 15.0001M3.0498 20.0001V15.0001H8.0498"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const FolderDownloadIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H9L12 7H19C19.5304 7 20.0391 7.21071 20.4142 7.58579C20.7893 7.96086 21 8.46957 21 9V12.5M19 16V22M19 22L22 19M19 22L16 19"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const DoorEnterIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 12V12.01M3 21H21M5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H13M17 13.5V21M21 7H14M14 7L17 4M14 7L17 10"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const RotateRightIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.8901 5.0799C14.0201 4.8199 13.0601 4.6499 12.0001 4.6499C7.21008 4.6499 3.33008 8.5299 3.33008 13.3199C3.33008 18.1199 7.21008 21.9999 12.0001 21.9999C16.7901 21.9999 20.6701 18.1199 20.6701 13.3299C20.6701 11.5499 20.1301 9.8899 19.2101 8.5099"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.1302 5.32L13.2402 2"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.1298 5.32007L12.7598 7.78007"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const DashboardIcon = ({
  width = 24,
  height = 24,
  strokeColor = "#373E4E",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 19.77V15.73C22 14.14 21.36 13.5 19.77 13.5H15.73C14.14 13.5 13.5 14.14 13.5 15.73V19.77C13.5 21.36 14.14 22 15.73 22H19.77C21.36 22 22 21.36 22 19.77Z"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const MerchantIcon = ({
  width = 24,
  height = 24,
  strokeColor = "#373E4E",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.00781 11.2188V15.7087C3.00781 20.1987 4.80781 21.9987 9.29781 21.9987H14.6878C19.1778 21.9987 20.9778 20.1987 20.9778 15.7087V11.2188"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0005 12C13.8305 12 15.1805 10.51 15.0005 8.68L14.3405 2H9.67048L9.00048 8.68C8.82048 10.51 10.1705 12 12.0005 12Z"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3069 12C20.3269 12 21.8069 10.36 21.6069 8.35L21.3269 5.6C20.9669 3 19.9669 2 17.3469 2H14.2969L14.9969 9.01C15.1669 10.66 16.6569 12 18.3069 12Z"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.63842 12C7.28842 12 8.77842 10.66 8.93842 9.01L9.15842 6.8L9.63842 2H6.58842C3.96842 2 2.96842 3 2.60842 5.6L2.33842 8.35C2.13842 10.36 3.61842 12 5.63842 12Z"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 17C10.33 17 9.5 17.83 9.5 19.5V22H14.5V19.5C14.5 17.83 13.67 17 12 17Z"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const LocationIcon = ({
  width = 24,
  height = 24,
  strokeColor = "#373E4E",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 8.99953V14.9995C22 17.4995 21.5 19.2495 20.38 20.3795L14 13.9995L21.73 6.26953C21.91 7.05953 22 7.95953 22 8.99953Z"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.73 6.27L6.26999 21.73C3.25999 21.04 2 18.96 2 15V9C2 4 4 2 9 2H15C18.96 2 21.04 3.26 21.73 6.27Z"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.3835 20.38C19.2535 21.5 17.5034 22 15.0034 22H9.00345C7.96345 22 7.06344 21.91 6.27344 21.73L14.0034 14L20.3835 20.38Z"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.24124 7.97875C6.92124 5.04875 11.3212 5.04875 12.0012 7.97875C12.3912 9.69875 11.3112 11.1588 10.3612 12.0588C9.67123 12.7188 8.58125 12.7188 7.88125 12.0588C6.93125 11.1588 5.84124 9.69875 6.24124 7.97875Z"
        stroke="#373E4E"
        strokeWidth="1.5"
      />
      <path
        d="M9.09607 8.69922H9.10505"
        stroke="#373E4E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const LicenseIcon = ({
  width = 24,
  height = 24,
  strokeColor = "#373E4E",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 2V5"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 2V5"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 8.5V13.63C20.11 12.92 18.98 12.5 17.75 12.5C16.52 12.5 15.37 12.93 14.47 13.66C13.26 14.61 12.5 16.1 12.5 17.75C12.5 18.73 12.78 19.67 13.26 20.45C13.63 21.06 14.11 21.59 14.68 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 11H13"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 16H9.62"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 17.75C23 18.73 22.72 19.67 22.24 20.45C21.96 20.93 21.61 21.35 21.2 21.69C20.28 22.51 19.08 23 17.75 23C16.6 23 15.54 22.63 14.68 22C14.11 21.59 13.63 21.06 13.26 20.45C12.78 19.67 12.5 18.73 12.5 17.75C12.5 16.1 13.26 14.61 14.47 13.66C15.37 12.93 16.52 12.5 17.75 12.5C18.98 12.5 20.11 12.92 21 13.63C22.22 14.59 23 16.08 23 17.75Z"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.75 20.25C17.75 18.87 18.87 17.75 20.25 17.75C18.87 17.75 17.75 16.63 17.75 15.25C17.75 16.63 16.63 17.75 15.25 17.75C16.63 17.75 17.75 18.87 17.75 20.25Z"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ResellerIcon = ({
  width = 24,
  height = 24,
  strokeColor = "#373E4E",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.1625 10.87C9.0625 10.86 8.9425 10.86 8.8325 10.87C6.4525 10.79 4.5625 8.84 4.5625 6.44C4.5625 3.99 6.5425 2 9.0025 2C11.4525 2 13.4425 3.99 13.4425 6.44C13.4325 8.84 11.5425 10.79 9.1625 10.87Z"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.4112 4C18.3512 4 19.9112 5.57 19.9112 7.5C19.9112 9.39 18.4113 10.93 16.5413 11C16.4613 10.99 16.3713 10.99 16.2812 11"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.15875 14.56C1.73875 16.18 1.73875 18.82 4.15875 20.43C6.90875 22.27 11.4188 22.27 14.1688 20.43C16.5888 18.81 16.5888 16.17 14.1688 14.56C11.4288 12.73 6.91875 12.73 4.15875 14.56Z"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3438 20C19.0638 19.85 19.7437 19.56 20.3037 19.13C21.8637 17.96 21.8637 16.03 20.3037 14.86C19.7537 14.44 19.0838 14.16 18.3738 14"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ReportIcon = ({
  width = 24,
  height = 24,
  strokeColor = "#373E4E",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.1103 11.1523H7.4603C6.8303 11.1523 6.32031 11.6623 6.32031 12.2923V17.4123H10.1103V11.1523V11.1523Z"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.7616 6.60156H11.2415C10.6115 6.60156 10.1016 7.11158 10.1016 7.74158V17.4016H13.8916V7.74158C13.8916 7.11158 13.3916 6.60156 12.7616 6.60156Z"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5484 12.8516H13.8984V17.4016H17.6884V13.9916C17.6784 13.3616 17.1684 12.8516 16.5484 12.8516Z"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const HelpIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 16V16.01M12 12.9998C12.4498 13.0011 12.8868 12.8508 13.2407 12.5732C13.5945 12.2956 13.8444 11.9068 13.95 11.4696C14.0557 11.0324 14.0109 10.5724 13.8229 10.1638C13.6349 9.75524 13.3147 9.42195 12.914 9.21776C12.5162 9.01397 12.0611 8.95079 11.6228 9.03848C11.1845 9.12618 10.7888 9.3596 10.5 9.70076M12 3C19.2 3 21 4.8 21 12C21 19.2 19.2 21 12 21C4.8 21 3 19.2 3 12C3 4.8 4.8 3 12 3Z"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const SettingIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12.8814V11.1214C2 10.0814 2.85 9.2214 3.9 9.2214C5.71 9.2214 6.45 7.9414 5.54 6.3714C5.02 5.4714 5.33 4.3014 6.24 3.7814L7.97 2.7914C8.76 2.3214 9.78 2.6014 10.25 3.3914L10.36 3.5814C11.26 5.1514 12.74 5.1514 13.65 3.5814L13.76 3.3914C14.23 2.6014 15.25 2.3214 16.04 2.7914L17.77 3.7814C18.68 4.3014 18.99 5.4714 18.47 6.3714C17.56 7.9414 18.3 9.2214 20.11 9.2214C21.15 9.2214 22.01 10.0714 22.01 11.1214V12.8814C22.01 13.9214 21.16 14.7814 20.11 14.7814C18.3 14.7814 17.56 16.0614 18.47 17.6314C18.99 18.5414 18.68 19.7014 17.77 20.2214L16.04 21.2114C15.25 21.6814 14.23 21.4014 13.76 20.6114L13.65 20.4214C12.75 18.8514 11.27 18.8514 10.36 20.4214L10.25 20.6114C9.78 21.4014 8.76 21.6814 7.97 21.2114L6.24 20.2214C5.33 19.7014 5.02 18.5314 5.54 17.6314C6.45 16.0614 5.71 14.7814 3.9 14.7814C2.85 14.7814 2 13.9214 2 12.8814Z"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const LogoutIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.1016 16.4405C14.7916 20.0405 12.9416 21.5105 8.89156 21.5105H8.76156C4.29156 21.5105 2.50156 19.7205 2.50156 15.2505V8.74047C2.50156 4.27047 4.29156 2.48047 8.76156 2.48047H8.89156C12.9116 2.48047 14.7616 3.93047 15.0916 7.47047"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.00281 12H20.3828"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.15 15.3484L21.5 11.9984L18.15 8.64844"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const DotsIcon = () => {
  return (
    <svg
      width="92"
      height="8"
      viewBox="0 0 92 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="4" cy="4" r="4" fill="#373E4E" />
      <circle cx="16" cy="4" r="4" fill="#373E4E" />
      <circle cx="28" cy="4" r="4" fill="#373E4E" />
      <circle cx="40" cy="4" r="4" fill="#373E4E" />
      <circle cx="52" cy="4" r="4" fill="#373E4E" />
      <circle cx="64" cy="4" r="4" fill="#373E4E" />
      <circle cx="76" cy="4" r="4" fill="#373E4E" />
      <circle cx="88" cy="4" r="4" fill="#373E4E" />
    </svg>
  );
};

export const Edit2Icon = () => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.84 2.89982L3.36667 8.69315C3.16 8.91315 2.96 9.34649 2.92 9.64649L2.67334 11.8065C2.58667 12.5865 3.14667 13.1198 3.92 12.9865L6.06667 12.6198C6.36667 12.5665 6.78667 12.3465 6.99334 12.1198L12.4667 6.32649C13.4133 5.32649 13.84 4.18649 12.3667 2.79315C10.9 1.41315 9.78667 1.89982 8.84 2.89982Z"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.9267 3.8667C8.21336 5.7067 9.7067 7.11337 11.56 7.30003"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 15.1665H14"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const StaffIcon = ({
  width = 24,
  height = 24,
  strokeColor = "#373E4E",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.0004 5.967C14.9504 5.95866 14.8921 5.95866 14.8421 5.967C13.6921 5.92533 12.7754 4.98366 12.7754 3.81699C12.7754 2.62533 13.7337 1.66699 14.9254 1.66699C16.1171 1.66699 17.0754 2.63366 17.0754 3.81699C17.0671 4.98366 16.1504 5.92533 15.0004 5.967Z"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.1422 12.0338C15.2839 12.2255 16.5422 12.0255 17.4255 11.4338C18.6005 10.6505 18.6005 9.36713 17.4255 8.58379C16.5339 7.99213 15.2589 7.79212 14.1172 7.99212"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.97539 5.967C5.02539 5.95866 5.08372 5.95866 5.13372 5.967C6.28372 5.92533 7.20039 4.98366 7.20039 3.81699C7.20039 2.62533 6.24206 1.66699 5.05039 1.66699C3.85873 1.66699 2.90039 2.63366 2.90039 3.81699C2.90872 4.98366 3.82539 5.92533 4.97539 5.967Z"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.83353 12.0338C4.69186 12.2255 3.43353 12.0255 2.5502 11.4338C1.3752 10.6505 1.3752 9.36713 2.5502 8.58379C3.44186 7.99213 4.71686 7.79212 5.85853 7.99212"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99941 12.1916C9.94941 12.1833 9.89108 12.1833 9.84108 12.1916C8.69108 12.1499 7.77441 11.2083 7.77441 10.0416C7.77441 8.84994 8.73275 7.8916 9.92441 7.8916C11.1161 7.8916 12.0744 8.85827 12.0744 10.0416C12.0661 11.2083 11.1494 12.1583 9.99941 12.1916Z"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.57461 14.8168C6.39961 15.6001 6.39961 16.8835 7.57461 17.6668C8.90794 18.5585 11.0913 18.5585 12.4246 17.6668C13.5996 16.8835 13.5996 15.6001 12.4246 14.8168C11.0996 13.9335 8.90794 13.9335 7.57461 14.8168Z"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ProfileIcons = () => {
  return (
    <svg
      width="800"
      height="800"
      viewBox="0 0 800 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_4715_85678)">
        <path
          d="M400 793.75C182.875 793.75 6.25 617.125 6.25 400C6.25 182.875 182.875 6.25 400 6.25C617.125 6.25 793.75 182.875 793.75 400C793.75 617.125 617.125 793.75 400 793.75Z"
          fill="white"
        />
        <path
          d="M400 12.5C613.675 12.5 787.5 186.325 787.5 400C787.5 613.675 613.675 787.5 400 787.5C186.325 787.5 12.5 613.675 12.5 400C12.5 186.325 186.325 12.5 400 12.5ZM400 0C179.075 0 0 179.075 0 400C0 620.925 179.075 800 400 800C620.925 800 800 620.925 800 400C800 179.075 620.925 0 400 0Z"
          fill="#D6D6D6"
        />
        <path
          d="M399.999 368.949C453.253 368.949 496.424 326.64 496.424 274.449C496.424 222.258 453.253 179.949 399.999 179.949C346.745 179.949 303.574 222.258 303.574 274.449C303.574 326.64 346.745 368.949 399.999 368.949Z"
          fill="#5B5FC7"
        />
        <path
          d="M566.549 563.475C566.549 473.325 491.974 400.25 399.999 400.25C308.024 400.25 233.449 473.325 233.449 563.475H566.549Z"
          fill="#5B5FC7"
        />
      </g>
      <defs>
        <clipPath id="clip0_4715_85678">
          <rect width="800" height="800" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ChangeHistoryIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5013 18.3337H12.5013C16.668 18.3337 18.3346 16.667 18.3346 12.5003V7.50033C18.3346 3.33366 16.668 1.66699 12.5013 1.66699H7.5013C3.33464 1.66699 1.66797 3.33366 1.66797 7.50033V12.5003C1.66797 16.667 3.33464 18.3337 7.5013 18.3337Z"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.125 7.5H6.875"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.125 12.5H6.875"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const PlaceholderIcon = () => {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.8"
        d="M0 10C0 4.47715 4.47715 0 10 0H70C75.5228 0 80 4.47715 80 10V70C80 75.5228 75.5228 80 70 80H10C4.47715 80 0 75.5228 0 70V10Z"
        fill="#F1F2F5"
      />
      <path
        d="M53.7136 47.0271L49.2795 36.6713C47.7778 33.158 45.0153 33.0163 43.1595 36.3596L40.482 41.1905C39.122 43.6413 36.5861 43.8538 34.8295 41.658L34.5178 41.2613C32.6903 38.9663 30.112 39.2496 28.7945 41.8705L26.3578 46.758C24.6436 50.158 27.1228 54.1671 30.9195 54.1671H48.9961C52.6795 54.1671 55.1586 50.413 53.7136 47.0271Z"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.875 34.333C35.2222 34.333 37.125 32.4302 37.125 30.083C37.125 27.7358 35.2222 25.833 32.875 25.833C30.5278 25.833 28.625 27.7358 28.625 30.083C28.625 32.4302 30.5278 34.333 32.875 34.333Z"
        stroke="#373E4E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const FprofileIcon = () => {
  return (
    <svg
      width="35"
      height="40"
      viewBox="0 0 35 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_10234_41862)">
        <path
          d="M17.3541 19.7379C22.887 19.7379 27.3723 15.3422 27.3723 9.91975C27.3723 4.49731 22.887 0.101562 17.3541 0.101562C11.8212 0.101562 7.33594 4.49731 7.33594 9.91975C7.33594 15.3422 11.8212 19.7379 17.3541 19.7379Z"
          fill="#5B5FC7"
        />
        <path
          d="M34.6546 39.9428C34.6546 30.5766 26.9066 22.9844 17.3507 22.9844C7.79492 22.9844 0.046875 30.5766 0.046875 39.9428H34.6546Z"
          fill="#5B5FC7"
        />
      </g>
      <defs>
        <clipPath id="clip0_10234_41862">
          <rect width="34.7013" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const FlocationIcon = () => {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40.3984 30.9181L34.1389 16.299C32.019 11.3394 28.1192 11.1393 25.4994 15.859L21.7197 22.6787C19.7998 26.1384 16.2199 26.4384 13.7402 23.3387L13.3001 22.7786C10.7203 19.5388 7.08056 19.9388 5.22068 23.6386L1.78084 30.5382C-0.639062 35.3379 2.86077 40.9975 8.22049 40.9975H33.7388C38.9386 40.9975 42.4383 35.6979 40.3984 30.9181Z"
        fill="#5B5FC7"
        stroke="#5B5FC7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.984 12.9993C14.2975 12.9993 16.9836 10.3131 16.9836 6.99963C16.9836 3.68614 14.2975 1 10.984 1C7.67052 1 4.98438 3.68614 4.98438 6.99963C4.98438 10.3131 7.67052 12.9993 10.984 12.9993Z"
        fill="#5B5FC7"
        stroke="#5B5FC7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
