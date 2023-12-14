import Image from "next/image"
import { FaCirclePlay } from "react-icons/fa6"

export const Song = () => {
  return (
    <div className="flex justify-between items-center gap-4">
      <div className="flex gap-4 py-2">
        <button className="h-14 bg-negro flex rounded-md justify-center items-center">
          <Image src='/home_bg.jpg' alt="" width={2000} height={2000} className="object-cover h-full w-full rounded-md" />
          <FaCirclePlay className='h-10 w-10 absolute' />
        </button>
        <div className="grid">
          <h3 className="text-sm line-clamp-1">Title music</h3>
          <span className="text-xs">Artist</span>
          <span className="text-xs">Genre</span>
        </div>
      </div>
      <div className="w-1/2 flex gap-4 justify-between items-center">
        <div>
          <svg
            width="120"
            height="32"
            viewBox="0 0 100 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.12008 9.61329C0.825506 9.61248 0.542419 9.69113 0.332583 9.83207C0.122748 9.97301 0.00319546 10.1648 8.68731e-06 10.3656V28.6232C-0.000572386 28.7236 0.0280019 28.8231 0.0840851 28.9159C0.140168 29.0087 0.22265 29.093 0.326774 29.164C0.430899 29.235 0.554605 29.2912 0.690761 29.3295C0.826917 29.3677 0.972829 29.3872 1.12008 29.3868C1.26733 29.3872 1.41324 29.3677 1.5494 29.3295C1.68556 29.2912 1.80926 29.235 1.91339 29.164C2.01751 29.093 2.09999 29.0087 2.15608 28.9159C2.21216 28.8231 2.24073 28.7236 2.24015 28.6232V10.3656C2.23697 10.1648 2.11741 9.97301 1.90758 9.83207C1.69774 9.69113 1.41466 9.61248 1.12008 9.61329Z"
              fill="#F9F9F9"
            />
            <path
              d="M7.80771 5.04297C7.51315 5.04515 7.2318 5.12664 7.02505 5.26969C6.8183 5.41273 6.70293 5.60571 6.70411 5.80652V33.1817C6.70293 33.3826 6.8183 33.5755 7.02505 33.7186C7.2318 33.8616 7.51315 33.9431 7.80771 33.9453C7.95496 33.9457 8.10087 33.9262 8.23703 33.888C8.37319 33.8497 8.49689 33.7935 8.60102 33.7225C8.70514 33.6516 8.78762 33.5672 8.84371 33.4744C8.89979 33.3816 8.92836 33.2821 8.92778 33.1817V5.80652C8.92836 5.70614 8.89979 5.60667 8.84371 5.51385C8.78762 5.42104 8.70514 5.33671 8.60102 5.26573C8.49689 5.19475 8.37319 5.13852 8.23703 5.10029C8.10087 5.06206 7.95496 5.04258 7.80771 5.04297Z"
              fill="#F9F9F9"
            />
            <path
              d="M14.5117 2.00049C14.3644 2.0001 14.2185 2.01958 14.0824 2.05781C13.9462 2.09604 13.8225 2.15227 13.7184 2.22325C13.6143 2.29423 13.5318 2.37856 13.4757 2.47137C13.4196 2.56419 13.391 2.66366 13.3916 2.76404V36.2251C13.391 36.3255 13.4196 36.425 13.4757 36.5178C13.5318 36.6106 13.6143 36.6949 13.7184 36.7659C13.8225 36.8369 13.9462 36.8931 14.0824 36.9314C14.2185 36.9696 14.3644 36.9891 14.5117 36.9887C14.8062 36.9865 15.0876 36.905 15.2943 36.762C15.5011 36.6189 15.6165 36.4259 15.6153 36.2251V2.76404C15.6165 2.56323 15.5011 2.37025 15.2943 2.22721C15.0876 2.08417 14.8062 2.00267 14.5117 2.00049Z"
              fill="#F9F9F9"
            />
            <path
              d="M21.1992 6.57032C20.9046 6.56952 20.6215 6.64816 20.4117 6.7891C20.2019 6.93004 20.0823 7.12183 20.0791 7.32263V31.6661C20.0785 31.7665 20.1071 31.866 20.1632 31.9588C20.2193 32.0516 20.3018 32.136 20.4059 32.2069C20.51 32.2779 20.6337 32.3341 20.7699 32.3724C20.906 32.4106 21.0519 32.4301 21.1992 32.4297C21.3464 32.4301 21.4923 32.4106 21.6285 32.3724C21.7647 32.3341 21.8884 32.2779 21.9925 32.2069C22.0966 32.136 22.1791 32.0516 22.2352 31.9588C22.2913 31.866 22.3198 31.7665 22.3193 31.6661V7.32263C22.3161 7.12183 22.1965 6.93004 21.9867 6.7891C21.7768 6.64816 21.4938 6.56952 21.1992 6.57032Z"
              fill="#F9F9F9"
            />
            <path
              d="M34.5903 11.1289C34.443 11.1285 34.2971 11.148 34.161 11.1862C34.0248 11.2245 33.9011 11.2807 33.797 11.3517C33.6929 11.4226 33.6104 11.507 33.5543 11.5998C33.4982 11.6926 33.4696 11.7921 33.4702 11.8925V27.1072C33.4734 27.3079 33.593 27.4997 33.8028 27.6407C34.0126 27.7816 34.2957 27.8603 34.5903 27.8595C34.8849 27.8603 35.168 27.7816 35.3778 27.6407C35.5876 27.4997 35.7072 27.3079 35.7104 27.1072V11.8925C35.7109 11.7921 35.6824 11.6926 35.6263 11.5998C35.5702 11.507 35.4877 11.4226 35.3836 11.3517C35.2795 11.2807 35.1558 11.2245 35.0196 11.1862C34.8835 11.148 34.7375 11.1285 34.5903 11.1289Z"
              fill="#F9F9F9"
            />
            <path
              d="M41.2779 8.08594C40.9834 8.08812 40.702 8.16962 40.4953 8.31266C40.2885 8.4557 40.1731 8.64868 40.1743 8.84949V30.1388C40.1731 30.3396 40.2885 30.5326 40.4953 30.6757C40.702 30.8187 40.9834 30.9002 41.2779 30.9024C41.4252 30.9028 41.5711 30.8833 41.7072 30.8451C41.8434 30.8068 41.9671 30.7506 42.0712 30.6796C42.1754 30.6086 42.2578 30.5243 42.3139 30.4315C42.37 30.3387 42.3986 30.2392 42.398 30.1388V8.84949C42.3986 8.7491 42.37 8.64964 42.3139 8.55682C42.2578 8.46401 42.1754 8.37968 42.0712 8.3087C41.9671 8.23772 41.8434 8.18149 41.7072 8.14326C41.5711 8.10503 41.4252 8.08555 41.2779 8.08594Z"
              fill="#F9F9F9"
            />
            <path
              d="M54.6694 0.484381C54.5221 0.483985 54.3762 0.503463 54.2401 0.541694C54.1039 0.579925 53.9802 0.636153 53.8761 0.707133C53.772 0.778113 53.6895 0.862443 53.6334 0.955259C53.5773 1.04808 53.5487 1.14754 53.5493 1.24792V37.752C53.5487 37.8523 53.5773 37.9518 53.6334 38.0446C53.6895 38.1374 53.772 38.2218 53.8761 38.2927C53.9802 38.3637 54.1039 38.42 54.2401 38.4582C54.3762 38.4964 54.5221 38.5159 54.6694 38.5155C54.8166 38.5159 54.9626 38.4964 55.0987 38.4582C55.2349 38.42 55.3586 38.3637 55.4627 38.2927C55.5668 38.2218 55.6493 38.1374 55.7054 38.0446C55.7615 37.9518 55.7901 37.8523 55.7895 37.752V1.24792C55.79 1.14754 55.7615 1.04808 55.7054 0.955259C55.6493 0.862443 55.5668 0.778113 55.4627 0.707133C55.3586 0.636153 55.2349 0.579925 55.0987 0.541694C54.9626 0.503463 54.8166 0.483985 54.6694 0.484381Z"
              fill="#F9F9F9"
            />
            <path
              d="M61.357 5.04297C61.0625 5.04515 60.7811 5.12664 60.5744 5.26969C60.3676 5.41273 60.2522 5.60571 60.2534 5.80652V33.1817C60.2522 33.3826 60.3676 33.5755 60.5744 33.7186C60.7811 33.8616 61.0625 33.9431 61.357 33.9453C61.5043 33.9457 61.6502 33.9262 61.7863 33.888C61.9225 33.8497 62.0462 33.7935 62.1503 33.7225C62.2545 33.6516 62.3369 33.5672 62.393 33.4744C62.4491 33.3816 62.4777 33.2821 62.4771 33.1817V5.80652C62.4777 5.70614 62.4491 5.60667 62.393 5.51385C62.3369 5.42104 62.2545 5.33671 62.1503 5.26573C62.0462 5.19475 61.9225 5.13852 61.7863 5.10029C61.6502 5.06206 61.5043 5.04258 61.357 5.04297Z"
              fill="#F9F9F9"
            />
            <path
              d="M68.061 9.61329C67.7664 9.61248 67.4833 9.69113 67.2735 9.83207C67.0637 9.97301 66.9441 10.1648 66.9409 10.3656V30.1391C66.9403 30.2395 66.9689 30.3389 67.025 30.4318C67.0811 30.5246 67.1636 30.6089 67.2677 30.6799C67.3718 30.7509 67.4955 30.8071 67.6317 30.8453C67.7678 30.8836 67.9137 30.903 68.061 30.9026C68.2083 30.903 68.3542 30.8836 68.4903 30.8453C68.6265 30.8071 68.7502 30.7509 68.8543 30.6799C68.9584 30.6089 69.0409 30.5246 69.097 30.4318C69.1531 30.3389 69.1817 30.2395 69.1811 30.1391V10.3656C69.1779 10.1648 69.0583 9.97301 68.8485 9.83207C68.6387 9.69113 68.3556 9.61248 68.061 9.61329Z"
              fill="#F9F9F9"
            />
            <path
              d="M81.4521 5.04297C81.3049 5.04258 81.1589 5.06206 81.0228 5.10029C80.8866 5.13852 80.7629 5.19475 80.6588 5.26573C80.5547 5.33671 80.4722 5.42104 80.4161 5.51385C80.36 5.60667 80.3315 5.70614 80.332 5.80652V33.1817C80.3315 33.2821 80.36 33.3816 80.4161 33.4744C80.4722 33.5672 80.5547 33.6516 80.6588 33.7225C80.7629 33.7935 80.8866 33.8497 81.0228 33.888C81.1589 33.9262 81.3049 33.9457 81.4521 33.9453C81.7467 33.9431 82.028 33.8616 82.2348 33.7186C82.4415 33.5755 82.5569 33.3826 82.5557 33.1817V5.80652C82.5569 5.60571 82.4415 5.41273 82.2348 5.26969C82.028 5.12664 81.7467 5.04515 81.4521 5.04297Z"
              fill="#F9F9F9"
            />
            <path
              d="M88.1396 9.61329C87.845 9.61249 87.562 9.69114 87.3521 9.83207C87.1423 9.97301 87.0227 10.1648 87.0195 10.3656V28.6232C87.019 28.7236 87.0475 28.8231 87.1036 28.9159C87.1597 29.0087 87.2422 29.093 87.3463 29.164C87.4504 29.235 87.5741 29.2912 87.7103 29.3295C87.8465 29.3677 87.9924 29.3872 88.1396 29.3868C88.2869 29.3872 88.4328 29.3677 88.5689 29.3295C88.7051 29.2912 88.8288 29.235 88.9329 29.164C89.037 29.093 89.1195 29.0087 89.1756 28.9159C89.2317 28.8231 89.2603 28.7236 89.2597 28.6232V10.3656C89.2565 10.1648 89.137 9.97301 88.9271 9.83207C88.7173 9.69113 88.4342 9.61248 88.1396 9.61329Z"
              fill="#F9F9F9"
            />
            <path
              d="M27.8863 11.1289C27.5918 11.1311 27.3104 11.2126 27.1037 11.3556C26.8969 11.4987 26.7815 11.6916 26.7827 11.8925V27.1072C26.7859 27.306 26.9031 27.4961 27.1094 27.6367C27.3157 27.7774 27.5946 27.8573 27.8863 27.8595C28.1809 27.8603 28.464 27.7816 28.6738 27.6407C28.8837 27.4997 29.0032 27.3079 29.0064 27.1072V11.8925C29.007 11.7921 28.9784 11.6926 28.9223 11.5998C28.8662 11.507 28.7838 11.4226 28.6796 11.3517C28.5755 11.2807 28.4518 11.2245 28.3156 11.1862C28.1795 11.148 28.0336 11.1285 27.8863 11.1289Z"
              fill="#F9F9F9"
            />
            <path
              d="M47.9819 3.52735C47.8346 3.52695 47.6887 3.54643 47.5526 3.58466C47.4164 3.6229 47.2927 3.67912 47.1886 3.7501C47.0845 3.82108 47.002 3.90541 46.9459 3.99823C46.8898 4.09105 46.8612 4.19051 46.8618 4.29089V34.7091C46.8612 34.8094 46.8898 34.9089 46.9459 35.0017C47.002 35.0945 47.0845 35.1789 47.1886 35.2498C47.2927 35.3208 47.4164 35.377 47.5526 35.4153C47.6887 35.4535 47.8346 35.473 47.9819 35.4726C48.2765 35.4704 48.5578 35.3889 48.7646 35.2459C48.9713 35.1028 49.0867 34.9099 49.0855 34.7091V4.29089C49.0867 4.09008 48.9713 3.89711 48.7646 3.75406C48.5578 3.61102 48.2765 3.52952 47.9819 3.52735Z"
              fill="#F9F9F9"
            />
            <path
              d="M74.7486 6.57032C74.4569 6.57246 74.178 6.65241 73.9717 6.79303C73.7654 6.93366 73.6482 7.12377 73.645 7.32263V33.182C73.6439 33.3828 73.7592 33.5758 73.966 33.7188C74.1727 33.8619 74.4541 33.9434 74.7486 33.9455C74.8959 33.9459 75.0418 33.9265 75.1779 33.8882C75.3141 33.85 75.4378 33.7938 75.5419 33.7228C75.6461 33.6518 75.7285 33.5675 75.7846 33.4747C75.8407 33.3818 75.8693 33.2824 75.8687 33.182V7.32263C75.8655 7.12183 75.746 6.93004 75.5361 6.78911C75.3263 6.64817 75.0432 6.56952 74.7486 6.57032Z"
              fill="#F9F9F9"
            />
            <path
              d="M87.8603 9.61329C87.5657 9.61248 87.2827 9.69113 87.0728 9.83207C86.863 9.97301 86.7434 10.1648 86.7402 10.3656V28.6232C86.7397 28.7236 86.7682 28.8231 86.8243 28.9159C86.8804 29.0087 86.9629 29.093 87.067 29.164C87.1711 29.235 87.2948 29.2912 87.431 29.3295C87.5672 29.3677 87.7131 29.3872 87.8603 29.3868C88.0076 29.3872 88.1535 29.3677 88.2896 29.3295C88.4258 29.2912 88.5495 29.235 88.6536 29.164C88.7577 29.093 88.8402 29.0087 88.8963 28.9159C88.9524 28.8231 88.981 28.7236 88.9804 28.6232V10.3656C88.9772 10.1648 88.8576 9.97301 88.6478 9.83207C88.438 9.69113 88.1549 9.61248 87.8603 9.61329Z"
              fill="#F9F9F9"
            />
            <path
              d="M94.5479 5.04297C94.2534 5.04515 93.972 5.12664 93.7653 5.26969C93.5585 5.41273 93.4432 5.60571 93.4443 5.80652V33.1817C93.4432 33.3826 93.5585 33.5755 93.7653 33.7186C93.972 33.8616 94.2534 33.9431 94.5479 33.9453C94.6952 33.9457 94.8411 33.9262 94.9773 33.888C95.1134 33.8497 95.2371 33.7935 95.3413 33.7225C95.4454 33.6516 95.5279 33.5672 95.5839 33.4744C95.64 33.3816 95.6686 33.2821 95.668 33.1817V5.80652C95.6686 5.70614 95.64 5.60667 95.5839 5.51385C95.5279 5.42104 95.4454 5.33671 95.3413 5.26573C95.2371 5.19475 95.1134 5.13852 94.9773 5.10029C94.8411 5.06206 94.6952 5.04258 94.5479 5.04297Z"
              fill="#F9F9F9"
            />
            <path
              d="M101.252 2.00049C101.105 2.0001 100.959 2.01958 100.823 2.05781C100.686 2.09604 100.563 2.15227 100.459 2.22325C100.354 2.29423 100.272 2.37856 100.216 2.47137C100.16 2.56419 100.131 2.66366 100.132 2.76404V36.2251C100.131 36.3255 100.16 36.425 100.216 36.5178C100.272 36.6106 100.354 36.6949 100.459 36.7659C100.563 36.8369 100.686 36.8931 100.823 36.9314C100.959 36.9696 101.105 36.9891 101.252 36.9887C101.546 36.9865 101.828 36.905 102.035 36.762C102.241 36.6189 102.357 36.4259 102.356 36.2251V2.76404C102.357 2.56323 102.241 2.37025 102.035 2.22721C101.828 2.08417 101.546 2.00267 101.252 2.00049Z"
              fill="#F9F9F9"
            />
            <path
              d="M107.939 6.57032C107.644 6.56952 107.361 6.64816 107.151 6.7891C106.942 6.93004 106.822 7.12183 106.819 7.32263V31.6661C106.818 31.7665 106.847 31.866 106.903 31.9588C106.959 32.0516 107.041 32.136 107.146 32.2069C107.25 32.2779 107.373 32.3341 107.51 32.3724C107.646 32.4106 107.792 32.4301 107.939 32.4297C108.086 32.4301 108.232 32.4106 108.368 32.3724C108.504 32.3341 108.628 32.2779 108.732 32.2069C108.836 32.136 108.919 32.0516 108.975 31.9588C109.031 31.866 109.06 31.7665 109.059 31.6661V7.32263C109.056 7.12183 108.936 6.93004 108.726 6.7891C108.517 6.64816 108.234 6.56952 107.939 6.57032Z"
              fill="#F9F9F9"
            />
          </svg>
        </div>
        <span>0:00</span>
      </div>
    </div>
  )
}
