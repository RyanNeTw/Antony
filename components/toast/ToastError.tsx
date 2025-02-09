const ErrorCard: React.FC = () => {
  return (
    <div className="relative flex w-[330px] h-[80px] items-center justify-around gap-4 rounded-lg bg-white p-3 shadow-md overflow-hidden">
      {/* Wave SVG */}
      <svg
        className="absolute left-[-31px] top-8 w-20 rotate-90 fill-red-500/20"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0,256L11.4,240C22.9,224,46,192,69,192C91.4,192,114,224,137,234.7C160,245,183,235,206,213.3C228.6,192,251,160,274,149.3C297.1,139,320,149,343,181.3C365.7,213,389,267,411,282.7C434.3,299,457,277,480,250.7C502.9,224,526,192,549,181.3C571.4,171,594,181,617,208C640,235,663,277,686,256C708.6,235,731,149,754,122.7C777.1,96,800,128,823,165.3C845.7,203,869,245,891,224C914.3,203,937,117,960,112C982.9,107,1006,181,1029,197.3C1051.4,213,1074,171,1097,144C1120,117,1143,107,1166,133.3C1188.6,160,1211,224,1234,218.7C1257.1,213,1280,139,1303,133.3C1325.7,128,1349,192,1371,192C1394.3,192,1417,128,1429,96L1440,64L1440,320L0,320Z" />
      </svg>

      {/* Icon Container */}
      <div className="ml-2 flex h-9 w-9 items-center justify-center rounded-full bg-red-500/30">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
          className="h-5 w-5 text-red-600"
        >
          <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
        </svg>
      </div>

      {/* Message Text Container */}
      <div className="flex flex-col flex-grow">
        <p className="text-lg font-bold text-red-600">Echec</p>
        <p className="text-sm text-gray-600">
          l&apos;opération que vous avez effectué n&apos;a pas pu être éxécuté
        </p>
      </div>

      {/* Close Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15 15"
        fill="none"
        stroke="currentColor"
        className="h-5 w-5 cursor-pointer text-gray-600"
      >
        <path
          fill="currentColor"
          d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
          clipRule="evenodd"
          fillRule="evenodd"
        />
      </svg>
    </div>
  )
}

export default ErrorCard
