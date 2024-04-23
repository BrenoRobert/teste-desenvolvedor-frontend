import dotlibLogo from '../assets/dotlib-logo.svg';

export function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={dotlibLogo} alt="" className='h-8' />

      <nav className="flex items-center gap-5">
        <h1 className='text-3xl font-semibold'>Consultas</h1>
      </nav>
    </div>
  );
}
