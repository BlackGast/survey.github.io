import * as React from "react";
import "../Question.scss";
import { Label } from "@fluentui/react";
import { ITextQuestionProps } from "./ITextQuestionProps";
import { CommandBarProperties } from "../../CommandBarProperties/CommandBarProperties";

export class TextQuestion extends React.Component<ITextQuestionProps> {
  private questions =
    this.props.survey.pages[this.props.pageId].panels[0].questions[
      this.props.id
    ];
  private delete = () => {
    this.props.deleteQuestion(this.props.id, this.props.pageId);
  };

  private requiredSymbol(): React.ReactNode {
    if (this.questions.required === false) {
      return (
        <Label id="questionName" className="question-label_title_name">
          {this.questions.title}
        </Label>
      );
    }
    if (this.questions.required === true) {
      return (
        <Label id="questionName" required className="question-label_title_name">
          {this.questions.title}
        </Label>
      );
    }
  }

  public render(): React.ReactNode {
    return (
      <div
        className="container_page_question ms-depth-4"
        id={`question-${this.props.pageId}-${this.props.id}`}
      >
        <div className="question-label">
          <div className="question-label_title">
            {this.props.id + 1}
            {"."}
            {this.requiredSymbol()}
          </div>
          <div className="question-label_type">Тип: Text question</div>
        </div>
        <div className="question_settings">
          <CommandBarProperties
            item="question"
            itemQuestion="Text"
            survey={this.props.survey}
            pageId={this.props.pageId}
            questionId={this.props.id}
            deleteQuestion={this.delete}
            editCurrentItem={this.props.editCurrentItem}
            editCurrentPropertyItem={this.props.editCurrentPropertyItem}
            currentItem={this.props.currentItem}
          />
        </div>
      </div>
    );
  }
}
