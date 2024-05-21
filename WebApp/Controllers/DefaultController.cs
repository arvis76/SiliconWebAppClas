using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Text;
using WebApp.ViewModels;

namespace WebApp.Controllers;

public class DefaultController(HttpClient httpClient) : Controller
{
    private readonly HttpClient _httpClient = httpClient;

    public IActionResult Home()
    {
        
        return View();
    }

    [HttpPost]

    public async Task<IActionResult> Subscribe (SubscribeViewModel model)
    {
        if (ModelState.IsValid)
        {
            var content = new StringContent(JsonConvert.SerializeObject(model), Encoding.UTF8, "application/json");
            var response = await _httpClient.PostAsync("https://localhost:7020/api/subscribe", content);
            if (response.IsSuccessStatusCode)
            {
                TempData["StatusMessage"] = "You are successfully subcribed";
            }
            else if (response.StatusCode == System.Net.HttpStatusCode.Conflict) 
            {
                TempData["StatusMessage"] = "You are already subcribed";
            }          
        }
        else 
        {
            TempData["StatusMessage"] = "Something went wrong";
        }
        return RedirectToAction("Home", "Default", "subscribe");
    }
}
