using System.ComponentModel.DataAnnotations;

namespace WebApp.Validator;

public class CheckboxRequired : ValidationAttribute
{
    public override bool IsValid(object? value) => value is bool b && b;
    
}
