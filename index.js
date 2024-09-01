$(document).ready(function(){
    const DateTime = luxon.DateTime;

    // Countdown timer
    const DayFromNow = DateTime.fromObject({
        year: 2024, month: 9, day: 15,
    }).setZone('Asia/Manila').startOf('day').plus({
        hour: 17,
    }).toJSDate();

    const toDayFromNow = (DayFromNow.getTime() / 1000) + (3600 / 60 / 60 / 24) - 1;
    
    // Set Up FlipDown
    var flipdown = new FlipDown(toDayFromNow).start().ifEnded(() => {
        $('#countdown-custom-header').html("We're currently celebrating!")
    });



    // Random Easter Egg
    // If you found it while checking for the source code, you cheated! XD
    const a2V5Y29sbGVjdGVk = [];
    
    const keyCodes = {}
    for (let i = 97, a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''); i <= 122; i++){
        keyCodes[i] = a[i-97];
    }

    $(document).keypress(function(e){
        a2V5Y29sbGVjdGVk.push(e.keyCode);

        if (a2V5Y29sbGVjdGVk.length > 5) a2V5Y29sbGVjdGVk.shift();

        // if user types shrek
        // if (a2V5Y29sbGVjdGVk.map(x => keyCodes[x]).join('') === 'SHREK'){
        //     // change animated background icons to shrek
        //     $('.x-ab-bg-icns li').css({
        //         background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 258 258'%3E%3Cpath d='M73 40h3l-.457 2.125C75.13 45.463 75.07 47.749 76 51c3.144 2.707 6.076 4.348 9.766 6.246 3.659 1.984 6.467 3.737 7.984 7.727.918 7.672-1.78 13.572-4.84 20.492-8.407 19.573-6.224 41.094 1.278 60.473 5.907 13.385 12.955 28.986 27 35.125 10.327 3.885 20.608 4.287 30.812-.063 13.253-7.03 24.1-15.936 33-28l1.973-2.582c5.392-7.637 7.236-15.402 9.027-24.418l.684-3.164c2.273-11.632 1.894-22.576-.989-34.035-.885-3.565-1.408-6.164-.695-9.801 2.014-3.018 4.4-5.481 7-8l1.813-1.875c2.857-2.756 4.255-4.088 8.312-4.25 3.192 1.249 5.351 2.824 7.875 5.125-3.276 2.184-4.97 2.373-8.812 2.813-5.623.87-8.465 1.86-12.188 6.187-.96 2.878-1 4.968-1 8 5.72 1.284 8.842.77 14-2l2.625-2.25C213 81 213 81 215.813 81.25L218 82c1.193 3.877 2 6.916 2 11l3.227.262c9.798.907 18.81 2.475 27.773 6.738l1 2-1.766-.437c-7.248-1.642-16.04-3.61-22.964-.231-2.494 1.633-2.494 1.633-4.27 4.668-.447 3.344-.328 6.72-.309 10.09l.012 3.086c.163 11.902 1.671 23.602 3.234 35.387q.834 6.47 1.653 12.94l.393 3.095c1.404 11.208 2.196 22.35 2.204 33.652l.038 2.734c.013 6.03-.158 12.29-2.225 18.016-3.159 2.106-5.027 2.552-8.715 3.219l-3.491.634-3.732.647-3.803.669c-10.37 1.775-20.753 3.202-31.259 3.831l-3.73.23c-3.71-.261-5.387-.91-8.27-3.23-8.838-12.391-13.64-31.034-15-46l-2.848 1.488c-4.812 2.063-9.434 1.844-14.59 1.7l-2.794-.042A562 562 0 0 1 123 188l1 2c.82 7.407-.27 14.513-1.75 21.75l-.475 2.398c-1.843 8.456-4.587 14.805-11.775 19.852-17.366 5.789-41.53-.666-58.875-4.375l-2.719-.56c-6.18-1.407-12.973-3.412-16.658-8.946-2.91-8.244 3.588-22.156 5.82-30.413 13.708-43.362 13.708-43.362 11.12-87.206-1.841-2.727-2.693-3.328-5.688-4.5-7.874-1.032-14.607.73-21.937 3.438q-2.732.968-5.465 1.933l-2.39.873A63 63 0 0 1 7 106v-2c13.826-7.312 27.058-13.275 43-13l-.625-2.812C49 85 49 85 51 82c3.613.442 6.954.986 10.438 2.063C68.714 85.977 73.135 85.12 80 82c2.322-.405 4.655-.76 7-1 1.984-6.898 1.984-6.898 2-14-3.017-4.591-7.93-5.69-13-7a214 214 0 0 0-8.031-1.473L66 58l-1-2 8-4c-.344-2.473-.344-2.473-1-5l-2-1c.573-2.867.861-3.861 3-6' fill='%23231F20'/%3E%3Cpath d='M134.886 115.77c6.18 2.13 12.047 2.994 18.536 3.544 7.346.656 14.7 1.937 21.578 4.686l1 3-2.164 2.129c-2.356 2.355-4.605 4.793-6.83 7.273-15.25 16.957-15.25 16.957-27.315 17.84A135 135 0 0 1 131 154v-2l-3.063-.312c-7.244-1.265-10.524-2.703-15.062-8.5-5.407-7.896-8.517-16.741-9.875-26.188h-2v-3c12.885-3.98 21.501-2.67 33.886 1.77M126 118c-2.334 2.781-2.334 2.781-1.625 5.688L125 126c3.05 1.011 3.05 1.011 6 0l2 3c2.69.77 5.181.821 8 1 1.327-1.113 1.327-1.113 1.25-3.937L142 123c-2.761-2.311-2.761-2.311-5.563-1.687-2.418.6-2.418.6-4.437 1.687l-1.313-2.5L129 118zm-8 1 1 7c2.307-2.715 2.307-2.715 1.625-5.187L120 119zm26 4-1 7 9 1v-7zm11 2-1 4 5 1 1-4zm7 1v4l3-1v-3zm-41 13c.683 3.124.683 3.124 3.152 4.316C136.18 148.734 136.18 148.734 149 148c1.9-1.313 1.9-1.313 3-3v-2l-1.769-.152c-2.703-.235-5.404-.479-8.106-.723l-2.781-.238c-6.22-.57-12.247-1.536-18.344-2.887' fill='%23231F20'/%3E%3Cpath d='M168.438 30.938C179.678 39.985 187.366 52.525 189 67c6.267-2.293 9.219-6.664 13-12l2 1c-6.718 10.596-6.718 10.596-11 14-2.812.313-2.812.313-5 0l-1-4c-6.228-1.202-9.371-.932-15 2l4 4-9 1 3.625.25c4.284.533 7.017 1.965 10.375 4.75l1 3 2 1v2l-9 2 5 1v1c-8.426.544-15.305-.868-21.875-6.437L156 79l-2.312-2.375c-2.167-3.37-1.812-5.69-1.688-9.625l1.864-.703a7517 7517 0 0 0 8.386-3.172l2.934-1.105 2.832-1.075 2.602-.984c2.38-.91 2.38-.91 4.522-2.106 2.558-1.176 4.21-.591 6.86.145-3.19-10.562-10.03-20.785-19.59-26.566-10.336-5.328-21.492-6.28-32.722-2.872-12.693 4.884-22.72 14.395-28.618 26.626C100 57 100 57 97 59c-4.552 0-7.253-2.459-10.484-5.367C84.633 51.605 83.706 49.667 83 47l2.625 1.75 1.652 1.09c1.663 1.12 3.288 2.295 4.91 3.472L95 55c4.194-1.398 5.398-4.413 7.625-8 7.474-11.553 15.527-20.148 29.375-23.312 12.946-2.094 25.52-.368 36.438 7.25M174 76v7l6-1c-2.038-4.06-2.038-4.06-6-6m-12 2 1 3 1-3zm-37 5c1 3 1 3 .063 5.188L124 90l2.5-1c3.5 0 3.5 0 5.504 1.645a128 128 0 0 1 3.969 4.375c3.714 3.628 7.397 4.259 12.464 4.23 4.268-.069 7.542-.788 11.563-2.25 3.813-.187 3.813-.187 7 0l1 1 2-4 1.438 3.188c2.309 4.142 5.29 5.6 9.539 7.476 2.705 1.786 3.15 3.243 4.023 6.336a84 84 0 0 1 .625 5.813l.227 2.957L186 122h-2c-1.05-1.421-1.05-1.421-2.172-3.395l-1.266-2.146a580 580 0 0 1-2.578-4.508c-2.697-4.544-4.734-7.243-9.984-8.951-2.135-.091-2.135-.091-4.125.563l-2.32.617a147 147 0 0 0-5.485 1.89c-8.342 3.036-13.393 4.059-21.597.325a219 219 0 0 1-7.336-3.801c-6.164-3.132-11.933-3.376-18.637-1.594-7.765 2.804-11.85 9.994-15.5 17h-1c-.737-6.782 1.524-11.255 5-17l1.691-2.828c4.676-6.834 4.676-6.834 9.211-7.774q3.087-.086 6.176-.062c4.94-.568 7.732-3.742 10.922-7.336' fill='%23231F20'/%3E%3Cpath d='M122 45c7.227 3.566 17.488 8.692 20.25 16.563L143 65c1.516 2.176 3.215 4.027 5 6v1l-3.125.75c-3.812 1.07-6.616 3.005-9.875 5.25-5.963 2.01-13.705 2.121-19.629.105C113.188 77 113.188 77 110 75v-2l-3-1c5.642-3.762 10.197-5.392 17-5h3c-5.373-2.687-13.25-1-19 0 4.003-4.837 8.92-6.578 14.965-7.406 2.678-.248 5.35-.45 8.035-.594l-3.312-1.937-1.864-1.09C121.82 53.838 118.471 53.769 114 54c-2.834.897-2.834.897-5 2 .28-4.013.758-5.72 3.438-8.812 3.712-3.17 4.905-3.454 9.562-2.188m-10 28v2l5 1v-6c-2.046 0-3.516 1.755-5 3m15-2-1 6 5-1c-1.309-3.122-1.309-3.122-4-5m31.313 88.063C161 160 161 160 163 163c-.375 3.688-.375 3.688-1 7q-2.373.974-4.75 1.938l-2.672 1.09c-7.875 2.97-17.652 3.49-25.746.995-4.292-2.066-7.244-3.94-9.832-8.023v-2l2.379.656C131.73 167.4 138.274 167.66 148 163q1.89-1.133 3.75-2.312C155 159 155 159 158.313 159.063M207 53c1.95.855 1.95.855 4 2 1.265 3.601.94 6.347 0 10l-3-1c-1.203-2.405-1.1-3.95-1.062-6.625l.027-2.477z' fill='%23231F20'/%3E%3C/svg%3E")`,
        //     })
        // }

        // if user types cakes
        if (a2V5Y29sbGVjdGVk.map(x => keyCodes[x]).join('') === 'CAKES'){
            // change animated background icons to cakes
            $('.x-ab-bg-icns li').css({
                background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 550 550' %3E%3Cpath style='fill:%233b322e' d='M381.451 1079.218a8 8 0 0 0-8.113 7.887 8 8 0 0 0 8.113 8.113h106.375a8 8 0 0 0 8.113-7.887 8 8 0 0 0-8.113-8.113z' transform='translate(0 -1004.36)'/%3E%3Cpath style='fill:%233b322e' d='M392.159 1057.906a8 8 0 0 0-7.271 11.687l8.813 17.624-8.813 17.604a8.003 8.003 0 1 0 14.286 7.22l.027-.053 10.583-21.208a8 8 0 0 0 .021-7.146l-10.604-21.208a8 8 0 0 0-7.042-4.52m84.708.02a8 8 0 0 0-6.792 4.5l-10.583 21.208a8 8 0 0 0 0 7.146l10.583 21.208a8.004 8.004 0 0 0 14.341-7.111l-.028-.055-8.813-17.604 8.813-17.624a8.001 8.001 0 0 0-7.521-11.668m-42.354-32.02a8 8 0 0 0-7.875 8.124v106.355a8.001 8.001 0 1 0 16-.001V1034.03a8 8 0 0 0-8.125-8.124' transform='translate(0 -1004.36)'/%3E%3Cpath style='fill:%233b322e' d='M413.159 1036.551a8 8 0 0 0-3.291 15.208l21.188 10.605a8 8 0 0 0 7.167 0l21.188-10.605a8 8 0 1 0-7.145-14.313l-17.625 8.813-17.625-8.813a8 8 0 0 0-3.857-.895m21.187 74.667a8 8 0 0 0-3.292.832l-21.188 10.604a8 8 0 1 0 7.146 14.313l17.625-8.813 17.625 8.813a8 8 0 1 0 7.145-14.312l-21.188-10.604a7.96 7.96 0 0 0-3.873-.833m-180.928-106.716a8 8 0 0 0-6.354 3.292s-.437.704-.459.725c-.469.64-6.165 8.458-11.938 19.333-6.004 11.309-12.551 24.828-10.103 38.313 1.182 6.505 3.961 13.173 8.625 18.771 1.511 1.814 3.359 3.436 5.354 4.916h-17.209a8 8 0 0 0-8 8v109.313H72c-16.112 0-29.333 13.221-29.333 29.334v98.667H40c-22.021 0-40 17.979-40 40v128a8 8 0 0 0 8 8h490.667a8 8 0 0 0 8-8V1398.27a8 8 0 0 0 0-3.854v-19.25c0-22.021-17.979-40-40-40H464v-98.667c0-16.112-13.221-29.333-29.333-29.333H293.333v-109.313a8 8 0 0 0-8-8h-14.77c7.248-4.951 12.057-12.901 12.125-21.854 0-6.279-2.329-11.646-5.062-17.084s-6.091-10.88-9.105-16.02-5.677-10.01-6.999-13.626c-1.322-3.617-.853-5.111-1.003-4.854a8 8 0 0 0-7.082-11.958z' transform='translate(0 -1004.36)'/%3E%3Cpath style='fill:%23fcd116' d='M249.876 1033.606c1.588 3.163 2.966 6.366 4.791 9.479 3.129 5.333 6.349 10.575 8.625 15.104 2.276 4.528 3.364 8.434 3.354 9.771 0 4.786-5.744 11.25-13.124 11.25-3.082 0-5.575-1.406-8.084-4.417-2.508-3.01-4.464-7.55-5.166-11.417-.928-5.131 3.077-17.762 8.479-27.937.544-1.024.576-.863 1.125-1.833' transform='translate(0 -1004.36)'/%3E%3Cpath style='fill:%2381d4ef' d='M229.313 1105.897h48v101.313h-48z' transform='translate(0 -1004.36)'/%3E%3Cpath style='fill:%23ffc' d='M71.98 1223.21h362.667c7.525 0 13.333 5.809 13.333 13.333v17.333c-3.09 2.371-9.425 7.147-18.812 13.021-12.19 7.625-27.603 14.762-35.188 14.979-9.014.256-19.033-6.164-30.354-14.21-11.322-8.044-23.869-17.688-39.875-17.688-15.931 0-28.469 9.423-39.812 17.396s-21.475 14.5-30.625 14.5-19.282-6.527-30.625-14.5c-11.342-7.974-23.902-17.396-39.833-17.396-16.007 0-28.533 9.641-39.855 17.688s-21.363 14.466-30.374 14.21c-7.579-.214-23.001-7.333-35.188-14.958-9.364-5.861-15.685-10.617-18.791-13v-17.375c-.002-7.524 5.806-13.333 13.332-13.333' transform='translate(0 -1004.36)'/%3E%3Cpath style='fill:%23ea6153' d='M182.855 1265.98c9.149 0 19.282 6.529 30.624 14.5 11.343 7.974 23.903 17.396 39.834 17.396s28.47-9.423 39.812-17.396c11.343-7.973 21.476-14.5 30.625-14.5 9.075 0 19.239 6.654 30.605 14.729 11.365 8.077 24.023 17.615 40.083 17.167 14.765-.427 30.161-9.255 43.209-17.417 4.09-2.559 7.037-4.71 10.333-7v61.75H58.646v-61.729c3.292 2.293 6.23 4.445 10.313 7 13.047 8.165 28.458 16.986 43.23 17.396 16.051.448 28.701-9.092 40.062-17.167 11.366-8.078 21.53-14.729 30.604-14.729' transform='translate(0 -1004.36)'/%3E%3Cpath style='fill:%23ffc' d='M39.98 1351.21h426.667c13.435 0 24 10.565 24 24v16.917c-3.744 2.374-11.498 7.189-22.979 13.125-14.86 7.684-33.398 15.04-43.958 15.292-12.266.277-24.705-6.533-38.416-14.583s-28.643-17.313-46.688-17.313c-17.984 0-32.934 9.044-46.667 17.021-13.731 7.975-26.245 14.876-38.625 14.876s-24.893-6.9-38.625-14.876c-13.731-7.977-28.683-17.021-46.667-17.021-18.045 0-32.997 9.262-46.708 17.313s-26.13 14.869-38.396 14.583c-10.556-.245-29.113-7.605-43.979-15.292-11.482-5.938-19.22-10.753-22.959-13.125v-16.917c0-13.434 10.565-24 24-24' transform='translate(0 -1004.36)'/%3E%3Cpath style='fill:%23ea6153' d='M168.021 1404.647c12.38 0 24.894 6.879 38.625 14.854 13.732 7.977 28.684 17.042 46.667 17.042 17.984 0 32.914-9.065 46.646-17.042 13.731-7.975 26.266-14.854 38.645-14.854 12.318 0 24.83 7.029 38.583 15.104 13.755 8.076 28.786 17.208 46.875 16.793 16.5-.384 35.275-8.975 50.959-17.083 6.183-3.197 11.06-6.085 15.625-8.771v84.522H15.98v-84.522c4.562 2.685 9.426 5.577 15.604 8.771 15.684 8.109 34.457 16.704 50.959 17.083 18.09.415 33.12-8.716 46.875-16.793 13.753-8.077 26.287-15.104 38.603-15.104' transform='translate(0 -1004.36)'/%3E%3Cpath style='fill:%233b322e' d='M18.784 1079.218a8 8 0 0 0-8.113 7.887 8 8 0 0 0 8.113 8.113h106.375a8 8 0 0 0 8.113-7.887 8 8 0 0 0-8.113-8.113z' transform='translate(0 -1004.36)'/%3E%3Cpath style='fill:%233b322e' d='M29.492 1057.906a8 8 0 0 0-7.271 11.687l8.813 17.624-8.813 17.604a8.003 8.003 0 0 0 14.284 7.222l.028-.055 10.583-21.208a8 8 0 0 0 .021-7.146l-10.604-21.208a8 8 0 0 0-7.041-4.52m84.709.02a8 8 0 0 0-6.792 4.5l-10.583 21.208a8 8 0 0 0 0 7.146l10.583 21.208a8.003 8.003 0 0 0 14.312-7.167l-8.813-17.604 8.813-17.624a8.001 8.001 0 0 0-7.52-11.667m-42.355-32.02a8 8 0 0 0-7.875 8.124v106.355a8.001 8.001 0 1 0 16-.001V1034.03a8 8 0 0 0-8.125-8.124' transform='translate(0 -1004.36)'/%3E%3Cpath style='fill:%233b322e' d='M50.492 1036.551a8 8 0 0 0-3.291 15.208l21.188 10.605a8 8 0 0 0 7.167 0l21.188-10.605a8 8 0 1 0-7.145-14.313l-17.625 8.813-17.625-8.813a8 8 0 0 0-3.857-.895m21.188 74.667a8 8 0 0 0-3.292.832L47.2 1122.654a8 8 0 1 0 7.145 14.313l17.625-8.813 17.625 8.813a8 8 0 1 0 7.146-14.312l-21.188-10.604a8 8 0 0 0-3.873-.833' transform='translate(0 -1004.36)'/%3E%3Cpath style='fill:%23d6b31e' d='M249.876 1033.606c-.555.971-.576.811-1.125 1.833-1.699 3.2-3.167 6.602-4.479 9.979 2.647 4.473 5.366 8.942 7.292 12.771 2.276 4.528 3.364 8.434 3.354 9.771 0 3.212-2.715 7.029-6.645 9.292 1.627 1.169 3.306 1.958 5.25 1.958 7.38 0 13.124-6.464 13.124-11.25.011-1.337-1.077-5.243-3.354-9.771-2.276-4.529-5.497-9.771-8.625-15.104-1.825-3.114-3.203-6.315-4.792-9.479' transform='translate(0 -1004.36)'/%3E%3Cpath style='fill:%2373b6cb' d='M265.584 1105.897v101.313h11.729v-101.313z' transform='translate(0 -1004.36)'/%3E%3Cpath style='fill:%23d8d8af' d='M422.917 1223.21c7.525 0 13.333 5.809 13.333 13.333v17.333c-3.09 2.371-9.426 7.147-18.813 13.021-10.052 6.286-22.052 12.004-30.291 14.021 2.339.672 4.62 1.023 6.833.96 7.585-.214 22.997-7.354 35.188-14.979 9.386-5.874 15.722-10.65 18.812-13.021v-17.333c0-7.525-5.808-13.333-13.333-13.333h-11.729zm-251.792 26.77c-16.007 0-28.532 9.641-39.854 17.688-8.54 6.07-16.35 11.201-23.541 13.25 1.753.427 3.566.918 4.896.96 9.011.256 19.054-6.163 30.374-14.21 9.906-7.042 20.745-15.294 34.021-17.25a41 41 0 0 0-5.896-.438m140.896 0c-15.931 0-28.469 9.423-39.812 17.396-8.973 6.307-17.18 11.663-24.75 13.646 1.993.522 3.949.853 5.854.853 9.15 0 19.282-6.527 30.625-14.5 9.904-6.962 20.729-15.023 33.917-16.958a40 40 0 0 0-5.834-.438z' transform='translate(0 -1004.36)'/%3E%3Cpath style='fill:%23c75a4e' d='M182.855 1265.98c-1.891 0-3.847.341-5.834.875 7.563 1.987 15.766 7.324 24.729 13.625 11.343 7.974 23.903 17.396 39.834 17.396 2.015 0 3.965-.16 5.875-.438-13.211-1.926-24.065-9.991-33.98-16.958-11.341-7.973-21.475-14.5-30.624-14.5m140.895 0c-1.925 0-3.901.341-5.917.875 7.55 2.013 15.792 7.458 24.793 13.854 11.365 8.077 24.023 17.615 40.083 17.167 1.604 0 3.218-.245 4.833-.48-12.865-1.922-23.504-9.806-33.187-16.688-11.365-8.076-21.53-14.729-30.605-14.729zm124.23 7.48c-3.296 2.292-6.243 4.441-10.333 7-.448.277-.949.555-1.396.832v53.917h11.729zm-389.334 0v7.854c12.749 7.914 27.555 16.139 41.812 16.542 2.358.107 4.615-.128 6.834-.458-13.239-1.914-26.722-9.671-38.334-16.938-4.081-2.554-7.02-4.705-10.312-7' transform='translate(0 -1004.36)'/%3E%3Cpath style='fill:%23d8d8af' d='M454.917 1351.19c13.435 0 24 10.565 24 24v16.917c-3.744 2.374-11.498 7.189-22.979 13.125-13.073 6.759-28.69 12.964-39.521 14.604 2.443.448 4.871.746 7.292.682 10.56-.257 29.099-7.608 43.958-15.292 11.482-5.938 19.235-10.753 22.979-13.125v-16.917c0-13.435-10.565-24-24-24h-11.733zm-298.625 37.436c-18.045 0-32.997 9.262-46.708 17.313-11.004 6.462-21.174 12.059-31.104 13.896 1.481.224 3.168.661 4.437.682 12.266.288 24.686-6.533 38.396-14.583 12.229-7.181 25.462-15.282 40.979-16.958-1.967-.214-3.957-.352-6-.352zm170.584 0c-17.984 0-32.934 9.044-46.667 17.021-11.565 6.717-22.265 12.622-32.75 14.333 1.957.32 3.908.544 5.854.544 12.38 0 24.894-6.9 38.625-14.876 12.173-7.07 25.315-14.961 40.667-16.667-1.879-.203-3.778-.352-5.729-.352z' transform='translate(0 -1004.36)'/%3E%3Cpath style='fill:%23c75a4e' d='M168.021 1404.626c-1.937 0-3.881.214-5.833.544 10.478 1.711 21.171 7.6 32.729 14.313 13.732 7.977 28.684 17.042 46.667 17.042 2 0 3.949-.138 5.875-.352-15.412-1.676-28.602-9.595-40.813-16.688-13.731-7.975-26.245-14.854-38.625-14.854zm170.584 0c-1.959 0-3.924.224-5.895.544 10.453 1.738 21.159 7.758 32.75 14.563 13.755 8.077 28.786 17.208 46.875 16.793 1.469 0 2.979-.214 4.479-.374-14.918-1.725-27.753-9.447-39.625-16.417-13.754-8.074-26.266-15.104-38.583-15.104zm-322.625 6.041v6.583c1.389.758 2.339 1.395 3.875 2.188 15.684 8.109 34.455 16.699 50.958 17.083 2.453.107 4.843-.107 7.188-.352-15.347-1.63-32.147-9.352-46.417-16.729-6.178-3.195-11.042-6.086-15.604-8.771zm474.666 0c-3.426 2.017-7.53 4.294-11.729 6.583v77.938h11.729z' transform='translate(0 -1004.36)'/%3E%3C/svg%3E`,
            })
        }

        // if user types roses
        if (a2V5Y29sbGVjdGVk.map(x => keyCodes[x]).join('') === 'ROSES'){
            // change animated background icons to roses
            $('.x-ab-bg-icns li').css({
                background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128' aria-hidden='true' class='iconify iconify--noto'%3E%3Cpath d='m56.81 85.29 21.86.17s-1.74 5.65-3.18 7.87c-2.35 3.6-3.52 5.44-4.52 9.13-1.55 5.68-1.42 10.05-1.42 10.05s1.21-.42 2.68 0c1.79.51 2.76 1.7 2.6 2.43-.15.65-2.14.21-3.52 1.59-1.09 1.09-1.51 3.02-1.68 4.27-.17 1.26-.34 2.85-2.68 3.18-2.35.34-5.86.59-6.62-.59-.75-1.17-.34-21.61-.34-21.61z' fill='%23307d31'/%3E%3Cpath d='M56.56 80.76c-.42.75-10.32 2.53-10.32 2.53s-3.31 1.77-4.56 7.55c-.68 3.13-.53 9.47-1.12 11.69-.84 3.18-4.36 5.03-4.19 5.78s3.24.7 5.61-.34c5.36-2.35 6.3-7.21 8.04-11.39 1.68-4.02 4.86-6.13 4.86-6.13s-.75 2.92-.43 6.14c.27 2.77 1.14 6.3 0 9.73-1.09 3.27-2.62 5.24-2.01 5.54.46.22 5.92-.33 8.1-5.11 2.41-5.28 2.58-9.61 4.02-12.71 1.59-3.43 4.62-4.89 4.62-4.89s2.15 1.26 4.78 4.94c2.93 4.1 5.38 7.55 6.96 9.67 3.7 4.98 8.83 6.55 8.99 5.71.25-1.34-2.47-3.49-3.02-6.11-1.35-6.45.5-9.54-1.03-14.49-2.2-7.15-7.39-7.28-9.19-7.62-.42-.06-20.11-.49-20.11-.49' fill='%235c9823'/%3E%3Cpath d='M47.31 44.34c-1.13-1.01-17.87-13.21-17.87-13.21l-.25-7.42s-4.1-7.75.62-13.52c4.1-5.01 9.57-3.59 9.57-3.59s2.74-3.45 7.52-3.69c6.11-.31 9.09 4.83 9.09 4.83l27.55 4.53 15.47 10.06s2.29-.74 4.19.6c1.98 1.39 1.33 4.31 1.11 5.62-.21 1.25-20.65 17.56-20.65 17.56l2.14 31.96-7.14 7.97s-1 .98-3.05 1.24c-1.19.15-2.72-.33-2.72-.33l-4.45-12.78z' fill='%2396010c'/%3E%3Cpath d='m83.15 6.86-3.72.28-2.61 2.19.93 4.21s.12 3.15-2.36 4.66-7.35 3.99-7.35 3.99l-3.36 5.56s-2.16-.71-5.68-2.52c-3.29-1.7-7.5-5.58-7.5-5.58l-7.53-.51s-1.44-.13-2.65 1.15c-1.74 1.86-1.12 5.8 2.29 9.41 3.28 3.47 10.38 7.7 11.96 8.87s3.99 2.67 5.36 3.44c1.32.74 2.9 1.8 3.59 1.67.69-.14 1.71-2.49 4.94-4.76s6.39-4.19 11.55-5.98 10.11-3.85 11.62-4.81-.55-7.49-2.41-11.48-6.94-10.2-7.07-9.79' fill='%23af0c1b'/%3E%3Cpath d='M65.07 23.98c-1.27 1.68-1.03 3.64-1.03 3.64s2.77 1.66 5.5 2.61c4.95 1.72 16.09 1.24 21.45-1.17s7.98-4.49 8.8-7.01c.96-2.96 1.76-8.94-4-13.55-6.6-5.29-16.56-2.4-16.56-1.02s3.99.28 3.99 5.29-4.4 8.04-8.87 8.66-7.36 0-9.28 2.55' fill='%23db132c'/%3E%3Cpath d='M42.24 19.65s-.51-2.02 1.17-3.64c2.54-2.48 5.78-3.78 7.63-5.78s4.48-5.79 10.93-6.67c9.56-1.31 15.74 2.27 17.12 6.67s-1.24 5.91-3.92 5.98-4.17-1.19-9.08-.34c-8.32 1.44-11.21 5.91-11.96 6.33-.76.41-3.23-1.03-6.6-1.93-2.43-.65-4.19-.49-5.29-.62' fill='%23f71538'/%3E%3Cpath d='M69.62 48.38s1.7-5.65 7.25-9.23c5.56-3.58 9.61-3.67 16.68-6.88s9.51-5.32 10.64-6.06c1.16-.76 2.21-1.45 3.02-.12.52.86-.38 4.38-2.77 7.8-2.44 3.49-4.84 5.41-6.66 11.42-2.41 7.93 2.22 15.14-2.72 27.88-1.6 4.12-5.35 7.89-8.84 10.34s-8.52 3-8.52 3 1.79-1.25 2.77-5.85c.48-2.26 1.2-6.27.65-10.54-1.57-12.21-11.5-21.76-11.5-21.76' fill='%23cd0e1f'/%3E%3Cpath d='M31.74 46.68c.12 2.68-1.14 12.43.49 20.26 1.28 6.16 7.62 17.05 19.49 20.25 10.92 2.95 22.61-.09 22.61-.09s4.41-7.45 2.18-18.31c-2.43-11.84-14.26-20.64-27.9-27.38-16.39-8.1-19.36-17.86-19.36-17.86s-5.39-1.41-6.74 3.44c-2.07 7.44 9.05 15.64 9.23 19.69' fill='%23e2122d'/%3E%3C/svg%3E`,
            })
        }
    });
});