
import pt from '../../i18n/pt'
import * as S from './ContactSocial.style'
import Icon from '../Icon'

export default function ContactSocial(){
  const t = pt;

  return(
    <S.ContactSocial name="social">
      <S.ContactSocialList>
        {t.SOCIAL_ITEMS.map(({name, icon, link}) =>
          <S.ContactSocialListItem key={name + 'social'}>
            <a href={link} target="_blank"><Icon type={icon}/></a>
          </S.ContactSocialListItem>
        )}
      </S.ContactSocialList>
    </S.ContactSocial>
  )
}