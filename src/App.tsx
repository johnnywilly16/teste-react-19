//Pascal Case
//App
//Header
import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Olá mundo!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        nostrum, sit quas velit blanditiis cupiditate enim minima soluta modi
        voluptas quia mollitia, consequatur eius, eos nihil laborum veniam
        voluptatem repellat?
      </p>
    </>
  );
}
