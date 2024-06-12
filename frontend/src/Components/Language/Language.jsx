// * Base
import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';

// * Component
import Icon from '../Icon/Icon';

const Language = memo(() => {
  const [showList, setShowList] = useState(false);
  const [language, setLanguage] = useState('es');
  const { i18n } = useTranslation();
  // Change language
  const changeLanguage = (lang) => {
    setLanguage(lang);
    setShowList(false);
    i18n.changeLanguage(lang);
  };

  return (
    <div className='relative'>
      <div className='link' onClick={() => setShowList((prev) => !prev)}>
        {language === 'en' ? (
          <div>
            <Icon className='w-[50px]' icon='usa' />
          </div>
        ) : language === 'ua' ? (
          <div>
            <Icon className='w-[50px]' icon='ukraine' />
          </div>
        ) : language === 'es' ? (
          <div>
            <Icon className='w-[50px]' icon='spain' />
          </div>
        ) : (
          <div>
            <Icon className='w-[50px]' icon='germany' />
          </div>
        )}
      </div>
      {showList && (
        <ul className='w-[125px] border-collapse flex flex-col absolute top-full right-0 bg-purple border-black border-2 text-black shadow-xl '>
          {/* English */}
          <li
            className='py-2 px-2 border-b-2 border-[turquoise] border-collapse hover:bg-[turquoise] link'
            onClick={() => changeLanguage('en')}
          >
            English
          </li>
          {/* Ukrainian */}
          <li
            className='py-2 px-2 border-b-2 border-[turquoise] border-collapse hover:bg-[turquoise] link'
            onClick={() => changeLanguage('ua')}
          >
            Українська
          </li>
          {/* Spanish */}
          <li
            className='link py-2 px-2 border-b-2 border-[turquoise] border-collapse hover:bg-[turquoise]'
            onClick={() => changeLanguage('es')}
          >
            Español
          </li>
          {/* German */}
          <li
            className='link py-2 px-2 border-collapse hover:bg-[turquoise]'
            onClick={() => changeLanguage('de')}
          >
            Deutsch
          </li>
        </ul>
      )}
    </div>
  );
});

export default Language;
