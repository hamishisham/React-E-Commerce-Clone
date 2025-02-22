const AuthFooter = () => {
  return (
  <>
    <footer className="flex flex-col items-center border-[#D9D9D9] border-t gap-y-3 py-5 font-IBM">
      <ul className="flex items-center justify-center gap-x-2">
        <li className="text-[10px] text-[#2A8FD7] font-inika">
          <a href="#">Conditions of Use</a>
        </li>
        <li className="text-[10px] text-[#2A8FD7] font-inika">
        <a href="#">Privacy Notice</a>
        </li>
        <li className="text-[10px] text-[#2A8FD7] font-inika">
        <a href="#">Help</a>
        </li>
      </ul>
      <p className="text-[10px] text-black">© 1996-2024, Amazon.com, Inc. or its affiliates</p>
    </footer>
  </>
  )
}
export default AuthFooter;