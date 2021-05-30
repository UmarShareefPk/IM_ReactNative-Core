//const baseUrl = "https://localhost:44310/";
//const baseUrl = "https://192.168.100.173:44310/";
//const baseUrl = "http://10.0.2.2:52578/"; // for AVD
//const baseUrl = "http://127.0.0.1:52578/";
export const baseUrl = "http://192.168.100.175:52578/"; // for real device and avd
//const baseUrl = "http://localhost:52578/";

export const usersUrls = {
    tokenUrl : baseUrl + "token",
    authenticateUrl :  baseUrl + "api/Users/authenticate",
    allUsersUrl : baseUrl + "api/users/AllUsers",
    userssWithPageUrl : baseUrl + "api/Users/GetUsersWithPage?",
    addNewUserUrl : baseUrl + "api/Users/AddUser",
    updateHubIdUrl : baseUrl + "api/Users/UpdateHubId",
    allNotificationsUrl :  baseUrl + "api/Users/UserNotifications",
    setNotificationStatusUrl : baseUrl + "api/Users/UpdateIsRead"
}

export const incidentsUrls = {
    incidentsWithPageUrl : baseUrl + "api/Incidents/GetIncidentsWithPage?",
    addNewIncidentUrl : baseUrl + "api/Incidents/AddIncident",
    addNewCommentUrl : baseUrl + "api/Incidents/AddComment",
    deleteCommentUrl : baseUrl + "api/Incidents/DeleteComment?",
    updateIncidentUrl : baseUrl + "api/Incidents/UpdateIncident",
    updateCommentUrl : baseUrl + "api/Incidents/UpdateComment",    
    getIncidentByIdUrl : baseUrl + "api/Incidents/IncidentById?Id=",
    deleteAttachmentUrl : baseUrl + "api/Incidents/DeleteFile?",
    downloadFileUrl : baseUrl + "api/Incidents/DownloadFile?",
}