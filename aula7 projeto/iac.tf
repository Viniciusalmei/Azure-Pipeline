terraform {
    required_providers {
      azurerm = {
        source = "hashicorp/azurerm"
        version = "4.0.1"
      }
    }
}

provider "azurerm" {
    resource_provider_registrations = "none"
    subscription_id = "250ae9c3-6c33-4030-b72a-ed22fce22920"
    features {
      
    }
}

resource "azurerm_resource_group" "vinicius-almeida-robot-t1" {
  name = "vinicius-almeida-robot-t1"
  location = "UK West"
}

resource "azurerm_service_plan" "vinicius-almeida-robot-t1" {
  name = "vinicius-almeida-robot-t1"
  resource_group_name = azurerm_resource_group.vinicius-almeida-robot-t1.name
  location = azurerm_resource_group.vinicius-almeida-robot-t1.location
  sku_name = "S1"
  os_type = "Windows"
}

resource "azurerm_windows_web_app" "vinicius-almeida-robot-t1-app" {
  name = "vinicius-almeida-robot-app"
  resource_group_name = azurerm_resource_group.vinicius-almeida-robot-t1.name
  location = azurerm_resource_group.vinicius-almeida-robot-t1.location
  service_plan_id = azurerm_service_plan.vinicius-almeida-robot-t1.id
  site_config {
    always_on = false

  }
}


resource "azurerm_windows_web_app_slot" "vinicius-almeida-robot-t1-appQA" {
  name = "vinicius-almeida-robot-appQA"
  app_service_id = azurerm_windows_web_app.vinicius-almeida-robot-t1-app.id
  site_config {
     
  }
}