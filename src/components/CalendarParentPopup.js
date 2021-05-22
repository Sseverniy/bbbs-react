import React from "react";

function CalendarParentPopup({ children }) {
<div className="popup popup_type_description popup_opened">
     <form className="popup__container popup__container_type_calendar">
       <button className="popup__close popup__cancel" type="button" aria-label="Закрыть попап"/>
       {children}
     </form>
   </div>
};

export default CalendarParentPopup;