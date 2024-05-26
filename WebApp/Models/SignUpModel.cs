using System.ComponentModel.DataAnnotations;
using WebApp.Validator;

namespace WebApp.Models;

public class SignUpModel
{
    [Required]
    [DataType(DataType.Text)]
    [Display(Name = "First name", Prompt = "Enter your first name")]
    public string FirstName { get; set; } = null!;

    [Required]
    [DataType(DataType.Text)]
    [Display(Name = "Last name", Prompt = "Enter your last name")]
    public string LastName { get; set; } = null!;

    [Required]
    [DataType(DataType.EmailAddress)]
    [Display(Name = "E-mail adress", Prompt = "Enter your e-mail adress")]
    public string Email { get; set; } = null!;

    [Required]
    [DataType(DataType.Password)]
    [Display(Name = "Password", Prompt = "Enter your password")]
    
    public string Password { get; set; } = null!;

    [Required]
    [DataType(DataType.Password)]
    [Display(Name = "Confirm Password", Prompt = "You have to confirm your password")]
    [Compare(nameof(Password), ErrorMessage = "Passwords do not match")]
    public string ConfirmPassword { get; set; } = null!;

    [CheckboxRequired]
    [Display(Name = "I agree to the Terms & Conditions ", Prompt = "Terms and Conditions")]
    public bool TermsAndConditions { get; set; }
}

