export class Icons {
    avatar : 'https://www.pacasmayoprofesional.com/Aplicaciones/pprofesional/Pacasmayo.nsf/xsp/.ibmmodres/.css/ico_avatar.png'
}

export class SHARED {
    static get links() {
        return {
            app_store   : 'https://apps.apple.com/us/app/pacasmayo-profesional/id1382259247',
            google_play : 'https://play.google.com/store/apps/details?id=com.pe.cp.pacasmayoprofesional'
        }
    }
    static get routes() {
        return {
            URL_SOLUTIONS : 'soluciones',
            URL_CATEGORY  : 'categoria',
            URL_TYPE      : 'type'
        }
    }

    static get icons() {
        return {
            feather_menu    : './assets/images/svg/feather-menu.svg',
            home            : './assets/images/svg/home.svg',
            search          : './assets/images/svg/search.svg',
            dropdown        : './assets/images/svg/dropdown.svg',
            pacas_icon_grey : './assets/images/svg/pacasmayo-icon-grey.svg',
            facebook_fa     : './assets/images/svg/facebook-fa.svg',
            linkedin_fa     : './assets/images/svg/linkedin-fa.svg',
            more_icon       : './assets/images/svg/more-icon.svg',
            feather_eye     : './assets/images/svg/feather-eye.svg',
            close           : './assets/images/svg/close.svg',
            open            : './assets/images/svg/open.svg',
            settings        : './assets/images/svg/settings-cog.svg',
            report          : './assets/images/svg/report.svg',
            key             : './assets/images/svg/key.svg',
            logout          : './assets/images/svg/logout.svg',
            corazon         : './assets/images/svg/corazon.svg'
        }
    }

    static get icons_list() {
        return {
            aprobacion : './assets/images/menu/aprobacion.png',
            asistencia : './assets/images/menu/AsistenciaContratas.png',
        }
    }
}