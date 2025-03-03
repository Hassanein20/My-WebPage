package main

import (
	"html/template"
	"net/http"

	"github.com/gorilla/mux"
)

var tpl *template.Template

func init() {
	tpl = template.Must(template.ParseGlob("templates/*"))
}

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/", index).Methods("GET")
	r.HandleFunc("/downloadcv", downloadcv).Methods("GET")
	r.PathPrefix("/static/").Handler(http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))
	r.Handle("/favicon.ico", http.FileServer(http.Dir("static/images/"))).Methods("GET")
	http.ListenAndServeTLS(":443", "static/Certificate/cert.pem", "static/Certificate/key.pem", r)
}

func index(w http.ResponseWriter, r *http.Request) {
	tpl.ExecuteTemplate(w, "index.html", nil)
}

func downloadcv(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Disposition", "attachment; filename=Hassanein Sharaf Al Dein CV.pdf")
	w.Header().Set("Content-Type", "application/pdf")
	http.ServeFile(w, r, "./static/Data/Hassanein Sharaf Al Dein CV.pdf")
}
