/** @format */

import React from "react";

interface IMember {
  name: string;
  img_src: string;
}

export default function CardListComponent() {
  const bandMembers: Array<IMember> = [
    {
      name: "Freddie Mercury",
      img_src:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QDyRXhpZgAASUkqAAgAAAAFAA4BAgB/AAAASgAAAJiCAgARAAAAyQAAABIBAwABAAAAAQAAABoBBQABAAAA2gAAABsBBQABAAAA4gAAAAAAAABTaW5nZXIgRnJlZGRpZSBNZXJjdXJ5IG9mIFF1ZWVuIHBlcmZvcm1zIGR1cmluZyBMaXZlIEFpZCBhdCBXZW1ibGV5IFN0YWRpdW0gb24gMTMgSnVseSAxOTg1LiAoUGhvdG8gYnkgRGF2ZSBIb2dhbi9HZXR0eSBJbWFnZXMpMjAwNSBHZXR0eSBJbWFnZXMsAQAAAQAAACwBAAABAAAA/+0A1lBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAC6HAJQAApEYXZlIEhvZ2FuHAJ4AH9TaW5nZXIgRnJlZGRpZSBNZXJjdXJ5IG9mIFF1ZWVuIHBlcmZvcm1zIGR1cmluZyBMaXZlIEFpZCBhdCBXZW1ibGV5IFN0YWRpdW0gb24gMTMgSnVseSAxOTg1LiAoUGhvdG8gYnkgRGF2ZSBIb2dhbi9HZXR0eSBJbWFnZXMpHAJ0ABEyMDA1IEdldHR5IEltYWdlcxwCbgAMR2V0dHkgSW1hZ2Vz/+EFkmh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyI+Cgk8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgoJCTxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6SXB0YzR4bXBDb3JlPSJodHRwOi8vaXB0Yy5vcmcvc3RkL0lwdGM0eG1wQ29yZS8xLjAveG1sbnMvIiAgIHhtbG5zOkdldHR5SW1hZ2VzR0lGVD0iaHR0cDovL3htcC5nZXR0eWltYWdlcy5jb20vZ2lmdC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBsdXM9Imh0dHA6Ly9ucy51c2VwbHVzLm9yZy9sZGYveG1wLzEuMC8iICB4bWxuczppcHRjRXh0PSJodHRwOi8vaXB0Yy5vcmcvc3RkL0lwdGM0eG1wRXh0LzIwMDgtMDItMjkvIiB4bWxuczp4bXBSaWdodHM9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9yaWdodHMvIiBkYzpSaWdodHM9IjIwMDUgR2V0dHkgSW1hZ2VzIiBwaG90b3Nob3A6Q3JlZGl0PSJHZXR0eSBJbWFnZXMiIEdldHR5SW1hZ2VzR0lGVDpBc3NldElEPSI1NjI3MTgwMyIgeG1wUmlnaHRzOldlYlN0YXRlbWVudD0iaHR0cHM6Ly93d3cuZ2V0dHlpbWFnZXMuY29tL2V1bGE/dXRtX21lZGl1bT1vcmdhbmljJmFtcDt1dG1fc291cmNlPWdvb2dsZSZhbXA7dXRtX2NhbXBhaWduPWlwdGN1cmwiID4KPGRjOmNyZWF0b3I+PHJkZjpTZXE+PHJkZjpsaT5EYXZlIEhvZ2FuPC9yZGY6bGk+PC9yZGY6U2VxPjwvZGM6Y3JlYXRvcj48ZGM6ZGVzY3JpcHRpb24+PHJkZjpBbHQ+PHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5TaW5nZXIgRnJlZGRpZSBNZXJjdXJ5IG9mIFF1ZWVuIHBlcmZvcm1zIGR1cmluZyBMaXZlIEFpZCBhdCBXZW1ibGV5IFN0YWRpdW0gb24gMTMgSnVseSAxOTg1LiAoUGhvdG8gYnkgRGF2ZSBIb2dhbi9HZXR0eSBJbWFnZXMpPC9yZGY6bGk+PC9yZGY6QWx0PjwvZGM6ZGVzY3JpcHRpb24+CjxwbHVzOkxpY2Vuc29yPjxyZGY6U2VxPjxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPjxwbHVzOkxpY2Vuc29yVVJMPmh0dHBzOi8vd3d3LmdldHR5aW1hZ2VzLmNvbS9kZXRhaWwvNTYyNzE4MDM/dXRtX21lZGl1bT1vcmdhbmljJmFtcDt1dG1fc291cmNlPWdvb2dsZSZhbXA7dXRtX2NhbXBhaWduPWlwdGN1cmw8L3BsdXM6TGljZW5zb3JVUkw+PC9yZGY6bGk+PC9yZGY6U2VxPjwvcGx1czpMaWNlbnNvcj4KCQk8L3JkZjpEZXNjcmlwdGlvbj4KCTwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InciPz4K/9sAhAAJBgcIBwYJCAcICgoJCw0WDw0MDA0bFBUQFiAdIiIgHR8fJCg0LCQmMScfHy09LTE1Nzo6OiMrP0Q/OEM0OTo3AQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCABaAFoDASIAAhEBAxEB/8QAGwAAAQQDAAAAAAAAAAAAAAAABQABBAYCAwf/xAA7EAACAQMCAwUFBQUJAAAAAAABAgMABBEFIRIxQQYTIlFhMnGBkbEUIzOhwRVCUnLRByRiY5KywuHx/8QAGQEAAgMBAAAAAAAAAAAAAAAAAwQBAgUA/8QAHxEAAgMAAgMBAQAAAAAAAAAAAAECAxESISIxQQQT/9oADAMBAAIRAxEAPwDktxH4c1FqdNKrLUE864hmUezCtk7lsA9K1Lsa2v4gMVBPweCJXV3kJCr5dTWyNI+DeHi9d8/WtI9hV3zk7fKuj6BbWX2CF2hBkGxJ5UK63+a0JVXzeFBNpHLGWhJR+iOfa9Af61CIKkhgQQcEHpXWdQ0Kyv8Ah+4A/kGCaoXbLTV0vX5raNmZeBGBcb7qM5+OarTdzJtq4AKmp6VHAjUqWKWKkgzZs1jWWwOKWR5VxI1TNIhS51O2hlbhR5ACaibVJsIpZr63ith988qiP0bO1Q10TH2WhtDW51i2lMQW2lZuLwBVUjOMgbDO221F9Wk1C3jjttPVDAnIpjLHzOx+X/tadWlltZFi4hvuxHU4x+lQJNWazMaqrM8hOwpHyliZo5FJtdE61vdVt7K6mn4GeBQViUe1vVZ7WX7anqMF5JCYXktUypOeTMM/LFFbbX7q1uHM1oRG4KHiQj45zQrtdfjUNUjkAx3VukRHuJP0YUaqLXtC9zTXTAZpUqamBXRUqanqTtFT01ZCoOEBgZNXvsDoEkcx1jUY2hjRStssikF2bYuAegGQD1z6VI/s87OobVtYvrXvCxxarIuRj+Pf12B9NudXaTU5ZkMGpRfarcnZgw7yP1Gefuz8+VCnYl0Hrqb8ig9opB9uJJyucA+VDWijuImjkGRzHpVh7UaatupmVe8t5/YlHst6eYb0quWsDIAXmIjALMx6Ab/SgxixiUkEez9hJJHK0nHcW+eEWs8+QSN8hScH4/WhmvaZHfyS6nolnJFacYjeKRvGZeIglVySATjY75z05DF1i6jlSSBu7C/u5yD76s0eqPcLHdozxxyKFmCH2hndT5g4wfnV3yg9YJKNixFNezukg+0PazrATjvTEwTy9rGK0Yq6wdpZ5b+Szlgh+x3kfcyLI5jVlO2fQY2H1FBO1Wkppd+DatG9nOCYmjcuqkbMmT1B+oosZtvGBlBL0BcUsU1KrgxUQ0KxXUdUt7aTPdFsykfwDc/Pl8ahcHrRzsd4dVY/5Lf7lqs3kWy9cdkkzrEt5EliqRYVQAAo2wByAoaJOI5odxMrqpYYPTNbt+DKty8qz5NzlrNNJRXQVtSuTFMne2su00R3BXz945it6dmbHRdahuDMpgOSBKRgjHn1qraXrZklY5yAxUfA1dr2yXXuykEIJFzFEHi/xYHL4jFG4TlFxTFbGtUgH227CWOp2U1/oEMcV7EOJo4QAs458htxHfBHPkfTn+kJJDbmOQbE8SZ6H1q/djNaZb63tp3Pdyt3JGeWdh7t8UA7Z2y2GvlkyILhuNMDbizhx88/Aihx5qKi+zopRloIIE9wU7v8NgxdhuxoPrcqAvbW/EsXeCR1DHgL4IyB0ODjNWa2GYXZd2VvL+IEf8arl0EuIs4HFjFMRajhFnlq+gWmrJgVJBG9NmmRQcUb7MSdzqIznDJg4/mU/pQQUS0CYQa1ZPJgxmYI4PLhbwnPwJqs1sWi9bySZ0eK1d4VZ7iVMnPdRnhA5c2G5Ow6425U32KYfeQzzSrEuTFM5fKjmATuD5b42G2KkxthQpG42NSIHMQ4mHhccOazFJ8sNGSWaVbsroNwzmW74o7YsSCecgz0/rXR7KUxcBACquwA6DyqLY23HEmHVmIGfEp/SpjQvEBhcgcxjBrVgkn0Z0m2uyu69oE1p2gtNT0xeO3muo5JI1IzG3GCxA6jrtWjtKlvdNf2l4CGhuXlhYfusDy9xGx/6q03R72zDH2FYMkgOwYcgw6Vzi5vJ7vVLyWVtpJnOPLfl8KUvjnoZo79jWgCO69CufkQfoD86qt8v2XU7iLkqOce7p+VWmNgt1GW9nOG9x5/lVb7QLjWrgN0C5/0irw7itK2dSBF2MTtjrvWms5W43JrCjr0LSeyY4rI7gjOM9awrIVxyZ1LT9SFzaR3TR+GYBj6E8x86KLcR3MIi5KDkEdKrfZ850S3B5d3+tEbAnfesqTybz4aa7itLlYJEbdQqFsD0P8ASpSBV/Ddoj5FTwn6igOjE/tKMZOCNxVmnAUjhAGfKtL89jsjrELocJYiNLCxjkIVPvFIZR7Eo/Q1Qu0einTjFfW3E1rdeJs845DuQfec/nXRY/x5F/dKgkdOVCLtRJ2SlEgDf3dj4t9xuDVf1LMZamWM5vIQTvyoH2mZv2nM7bGREf3+EZ/PNFW/FUetBu0BJmtCTkmzBJPXxvXVLotc8A1KlSowsf/Z",
    },
    {
      name: "Brian May",
      img_src:
        "data:image/jpeg;base64,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",
    },
    {
      name: "Roger Taylor",
      img_src:
        "data:image/jpeg;base64,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",
    },
  ];
  return (
    <div className="card-list" id="content">
      {bandMembers.map(({ name, img_src }, i) => (
        <CardComponent name={name} img_src={img_src} key={i} />
      ))}
    </div>
  );
}

function CardComponent(props: IMember) {
  return (
    <div className="card">
      <p>{props.name}</p>
      <img src={props.img_src} alt="band" />
    </div>
  );
}
