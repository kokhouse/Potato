Gladys Milight
=======================

This module allows you to control your milight lamps in Gladys.

### Installation

To install this module :

- Install the module in Gladys 
- Reboot Gladys 
- Go on the dashboard on "Module" view, then in the module list press the "config" button on the milight module.
- Your milight bridge should appear in the "Device" view. If not, you can press config again. Note the ID of the bridge device.
- Create a device for each Milight lamp you want to control with the following parameters: 
identifier: `BRIDGE_ID_IN_GLADYS:MILIGHT_ZONE`, protocol: `rf`, service: `milight`. Note that the protocol here is important.
Here is an example of a lamp in Zone 1 with bridge ID 12 : {identifier: `12:1`}
- Create foreach device these three deviceTypes :

![Gladys milight](https://developer.gladysproject.com/assets/images/documentation/milight/gladys-milight.jpg)
