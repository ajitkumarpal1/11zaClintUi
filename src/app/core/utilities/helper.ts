import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { swalHelper } from '../constants/swal-helper';
import { utils, writeFile } from 'xlsx';

@Injectable({
  providedIn: 'root',
})
export class Helper {
  constructor() { }

  exportArrayToExcel(arr: any[], name?: string) {
    let wb = utils.book_new();
    let ws = utils.json_to_sheet(arr);
    utils.book_append_sheet(wb, ws, name);
    writeFile(wb, `${name}.xlsx`);
  }

  public showToast = async (title: any, icon: SweetAlertIcon) => {
    await Swal.fire({
      icon: icon,
      title: title,
      toast: true,
      showConfirmButton: false,
      showCloseButton: true,
      position: 'top-right',
      timer: 3500,
    });
  };

  public alert = async (text: any, icon: SweetAlertIcon) => {
    await Swal.fire({
      icon: icon,
      text: text,
      timer: 2500,
      showCloseButton: true,
      showConfirmButton: false,
    });
  };

  public confirmAlert = async (
    text: string,
    icon: SweetAlertIcon,
    confirmText: string,
    cancelText: string
  ) => {
    let result = await Swal.fire({
      icon: icon,
      text: text,
      showConfirmButton: true,
      showCancelButton: true,
      cancelButtonText: cancelText,
      confirmButtonText: confirmText,
    });
    return result.isConfirmed ? true : false;
  };

  public isObject(value: any) {
    if (value instanceof Object) {
      return true;
    } else {
      return false;
    }
  }

  public getString(value: any) {
    return value.toString();
  }

  private transform(value: string): string {
    let first = value.substring(0, 1).toUpperCase();
    return first + value.substring(1);
  }

  public trackByFn(index: any, item: any) {
    return index;
  }

  public getObject(object: any) {
    return Object.keys(object);
  }

  public getTitle(value: any) {
    value = value
      .toString()
      .replace(/([A-Z])/g, ' $1')
      .trim();
    value = value.toLowerCase();
    value = this.transform(value);
    return value;
  }

  public groupBy = (xs: any, key: any) => {
    return xs.reduce(function (rv: any, x: any) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  public getValue = (key: any, valueType: any) => {
    if (valueType == 's') {
      return key != null && key != undefined && key != '' ? key : '';
    } else {
      return key != null && key != undefined && key != '' ? key : 0;
    }
  };

  public readAsBinary = async (file: File) => {
    let fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);
    let fileReadingPromise = new Promise((resolve, reject) => {
      fileReader.onload = (e) => {
        if (fileReader.result != null && typeof fileReader.result != 'string') {
          let arrayBuffer: ArrayBuffer = fileReader.result;
          let data = new Uint8Array(arrayBuffer);
          let arr = new Array();
          for (var i = 0; i != data.length; ++i) {
            arr[i] = String.fromCharCode(data[i]);
          }
          let results = arr.join('');
          resolve(results);
        } else {
          resolve([]);
        }
      };
    });
    let binaryData = await fileReadingPromise;
    return binaryData;
  };

  public createJSONFile = async (json: any) => {
    const blob = new Blob([JSON.stringify(json)], { type: 'application/json' });
    return new File([blob], 'file.json');
  };

  public arraySplitter = (data: any) => {
    let categories: any[] = [];
    if (data != null && data.length > 0) {
      for (let index = 0; index < data.length; index++) {
        const splitter = data[index].split(',');
        const filterCategory = splitter.filter((e: any) => e != '');
        categories.push(filterCategory);
      }
    }
    return categories;
  };

  public arrayCategorySplitter2 = (data: any) => {
    let categories: any[] = [];
    if (data != null && data.length > 0) {
      const splitter = data.split(',');
      const filterCategory = splitter.filter((e: any) => e != '');
      categories.push(...filterCategory);
    }
    return categories.length == 0 ? null : categories;
  };

  public loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  mobileSeparator = (string: any) => {
    let ptrn = /\s/g;
    string = string.toString();
    string = string?.replace(ptrn, '');
    ptrn = /[A-Za-z]/g;
    string = string.replace(ptrn, '');
    string = string.split(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/);
    return string
      .map((ele: any) => {
        if (
          /^[0]{1}[2]{1}/.test(ele) &&
          ele.length == 11 &&
          /^[0-9]/.test(ele)
        ) {
          return {
            type: 'tel',
            value: ele,
          };
        } else if (ele.length == 10 && /^[6-9]\d{9}$/.test(ele)) {
          return {
            type: 'phone',
            value: ele,
          };
        } else if (
          ele.length == 10 ||
          (ele.length == 11 && /^[0-9]/.test(ele))
        ) {
          return {
            type: 'phone',
            value: ele.substring(1),
          };
        } else if (ele.length == 7 && /^[0-9]/.test(ele)) {
          return {
            type: 'phone',
            value: `0261${ele}`,
          };
        } else {
          return null;
        }
      })
      .filter((el: any) => el != null);
  };

  mergeAddress = (desc1: any, desc2: any, desc3: any) => {
    let adress = '';
    if (Boolean(desc1)) {
      adress += desc1;
    }
    if (Boolean(desc2)) {
      adress += desc1;
    }
    if (Boolean(desc3)) {
      adress += desc1;
    }
    return adress.trim() == '' ? '-' : adress;
  };

  copy2clipboard = (data: string) => {
    navigator.clipboard
      .writeText(data)
      .then(() => {
        swalHelper.swalToast(
          'success',
          'Text copied successfully',
          'top-right'
        );
      })
      .catch((err) => {
        swalHelper.swalToast('error', 'Failed to copy text', 'top-right');
      });
  };
}
