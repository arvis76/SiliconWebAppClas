using System.ComponentModel.DataAnnotations;

namespace WebApp.ViewModels;

public class SubscribeViewModel
{
    [Required]
    [EmailAddress]
    [Display(Name ="E-mail address", Prompt ="Your Email")]
    public string Email { get; set; } = null!;
    public bool DailyNewsLetter { get; set; }
    public bool AdvertisingUpdate { get; set; }
    public bool WeekinReview {  get; set; }
    public bool EventUpdate { get; set; }
    public bool StartUpsWeekly { get; set; }
    public bool Podcast { get; set; }
}
