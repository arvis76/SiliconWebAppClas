using System.ComponentModel.DataAnnotations;
using WebApp.Models;
using WebApp.Validator;

namespace WebApp.ViewModels;

public class SignUpViewModel
{
    public string Title { get; set; } = "Sign Up";

    public SignUpModel Form { get; set; } = new SignUpModel();

}

    
   
