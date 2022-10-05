import { useRouter } from 'next/router';
import en from '../../public/lang/en.js';
import kr from '../../public/lang/kr.js';

const useTrans = () => {
  const { locale } = useRouter();

  const trans = locale === 'en' ? en : kr;

  return trans;
};

export default useTrans;
