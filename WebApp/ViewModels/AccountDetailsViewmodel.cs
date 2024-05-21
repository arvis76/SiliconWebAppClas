using System.ComponentModel.DataAnnotations;

namespace WebApp.ViewModels;

public class AccountDetailsViewmodel
{
    public AccountBasicInfo? Basic { get; set; }
    public AccountAddressInfo? Address { get; set; }

}


public class AccountBasicInfo
{
    [Required]
    [Display(Name ="First name", Prompt ="Enter your first name")]
    public string FirstName { get; set; } = null!;

    [Required]
    [Display(Name = "First name", Prompt = "Enter your first name")]
    public string LastName { get; set; } = null!;

    [Required]
    [Display(Name ="E-mail address", Prompt ="Enter your e-mail adress")]
    [DataType(DataType.EmailAddress)]
    public string Email { get; set; } = null!;

   
    [Display(Name = "Phonenumber (optional)", Prompt = "Enter your phonenumber")]
    [DataType(DataType.PhoneNumber)]
    public string? PhoneNumber { get; set; }

    [Display(Name = "Bio(optional)", Prompt = "Add a short bio....(optional)")]
    [DataType(DataType.MultilineText)]
    public string? Bio { get; set; }
}

public class AccountAddressInfo
{
    [Required]
    [Display(Name = "AddressLine_1", Prompt = "Enter your first adress line")]
    public string AddressLine_1 { get; set; } = null!;


    [Display(Name = "Addressline_2(optional)", Prompt = "Enter your second adress line (optional)")]
    [DataType(DataType.Text)]
    public string? AddressLine_2 { get; set;}

    [Required]
    [Display(Name = "Postal Code", Prompt = "Enter your postal code")]
    public string Postalcode { get; set; } = null!;

    [Required]
    [Display(Name = "City", Prompt = "Enter your city")]
    public string City { get; set; } = null!;

}