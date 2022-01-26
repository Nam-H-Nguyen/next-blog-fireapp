import Loader from '../components/Loader';
import toast from 'react-hot-toast';

export default function Home() {
  return (
    <div>
      <button onClick={() => toast.success('hello success toast!')}>Open Toast!</button>
      <Loader />
    </div>
  )
}
